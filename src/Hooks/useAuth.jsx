import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const useAuth = () => {
  const properties = useContext(AuthContext);
  return properties;
};

export default useAuth;
