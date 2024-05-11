import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';

export const AuthContext = createContext(null);
// social auth provider
const googleProvider = new GoogleAuthProvider();
googleProvider.addScope('https://www.googleapis.com/auth/userinfo.email');

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Create a user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in user
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google Sign in
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Update current user
  const updateUserProfile = (Name, PhotoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: Name,
      photoURL: PhotoURL,
    });
  };

  // Logout
  const logOut = () => {
    setUser(null);
    signOut(auth);
  };

  // state check
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const allProperties = {
    createUser,
    signInUser,
    updateUserProfile,
    googleSignIn,
    logOut,
    user,
    loading,
    setLoading,
    setUser,
  };
  return (
    <AuthContext.Provider value={allProperties}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
