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
import axios from 'axios';
import { url } from '../Utils/url';

export const AuthContext = createContext(null);
// social auth provider
const googleProvider = new GoogleAuthProvider().addScope('email');
// googleProvider.addScope('https://www.googleapis.com/auth/userinfo.email');

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
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      const userEmail =
        currentUser?.providerData[0].email ||
        user?.providerData[0]?.email ||
        currentUser?.email ||
        user?.email;
      const loggedUser = { email: userEmail };
      setLoading(false);

      if (loggedUser) {
        axios.post(`${url}/jwt`, loggedUser, {
          withCredentials: true,
        });
      } else {
        axios.get(`${url}/logout`, {
          withCredentials: true,
        });
      }
    });
    return () => unsubscribe();
  }, [user?.email, user?.providerData]);

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
