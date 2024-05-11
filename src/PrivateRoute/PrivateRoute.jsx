import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className='absolute inset-0 z-20 grid min-h-screen w-full place-items-center bg-white dark:bg-black'>
        {' '}
        <span className='loading loading-infinity text-success w-[48px]'></span>
      </div>
    );
  }

  if (!user) {
    return <Navigate to={'/login'} state={location?.pathname || '/'} />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
