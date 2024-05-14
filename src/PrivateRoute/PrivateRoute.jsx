import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className='inset-0 z-20 grid min-h-screen w-full place-items-center bg-transparent'>
        {' '}
        <span className='loading loading-infinity w-[48px] text-success'></span>
      </div>
    );
  }

  if (!user) {
    return <Navigate to={'/login'} state={location?.pathname || '/'} />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
