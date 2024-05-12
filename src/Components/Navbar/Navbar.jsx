import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Navbar = () => {
  const { user, loading, logOut } = useAuth();
  return (
    <div
      className={`mx-auto flex max-w-7xl items-center justify-between border-b px-5 py-6 text-white`}
    >
      <nav>
        <ul className='flex items-center gap-5'>
          <li>
            <NavLink to={'/ourRooms'}>Our Rooms</NavLink>
          </li>
          <li>
            <NavLink to={`/myBookings/${user?.email}`}>My Bookings</NavLink>
          </li>
        </ul>
      </nav>
      <NavLink to={'/'} className={'flex items-center gap-2'}>
        <img className='w-12' src='/logo.png' alt='' />
        <span className='text-2xl font-semibold uppercase'>Dream Stay</span>
      </NavLink>
      <div className='flex items-center gap-4'>
        {loading ? (
          <span className='loading loading-infinity text-success'></span>
        ) : user ? (
          <div className='dropdown dropdown-hover'>
            <div tabIndex={0} role='button'>
              <div className='avatar'>
                <div className='w-12 rounded-full'>
                  <img src={user?.photoURL} />
                </div>
              </div>
            </div>
            <ul
              tabIndex={0}
              className='menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow'
            >
              <li onClick={logOut}>
                <a className='text-black'>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <NavLink className='btn' to={'/login'}>
            Login
          </NavLink>
        )}
        <NavLink className='btn' to={'/register'}>
          Register
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
