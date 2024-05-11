import { useContext } from 'react';
import { AuthContext } from '../AuhProvider/AuthProvider';

const useAuth = () => {
  const properties = useContext(AuthContext);
  return properties;
};

export default useAuth;
