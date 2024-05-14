import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Navbar = () => {
  const { user, loading, logOut } = useAuth();
  return (
    <div
      className={`mx-auto flex max-w-7xl items-center justify-between border-b px-2 py-4 text-white md:px-5 md:py-6`}
    >
      <nav>
        <ul className='hidden items-center gap-5 md:flex'>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'text-sm underline md:text-base'
                  : 'text-sm md:text-base'
              }
              to={'/ourRooms'}
            >
              Our Rooms
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'text-sm underline md:text-base'
                  : 'text-sm md:text-base'
              }
              to={`/myBookings/${user?.email}`}
            >
              My Bookings
            </NavLink>
          </li>
        </ul>
        <ul className='menu relative block p-0 md:hidden'>
          <li>
            <details>
              <summary className='p-0'>Menu</summary>
              <ul className='absolute m-0 w-[150px] space-y-2 bg-white p-2 text-black'>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? 'p-0 text-sm underline md:text-base'
                        : 'p-0 text-sm md:text-base'
                    }
                    to={'/ourRooms'}
                  >
                    Our Rooms
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? 'p-0 text-sm underline md:text-base'
                        : 'p-0 text-sm md:text-base'
                    }
                    to={`/myBookings/${user?.email}`}
                  >
                    My Bookings
                  </NavLink>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </nav>
      <NavLink to={'/'} className={'flex items-center gap-2'}>
        <img className='hidden w-12 md:block' src='/logo.png' alt='' />
        <span className='font-semibold uppercase md:text-2xl'>Dream Stay</span>
      </NavLink>
      <div className='flex items-center gap-2 md:gap-4'>
        {loading ? (
          <span className='loading loading-infinity text-success'></span>
        ) : user ? (
          <div className='dropdown dropdown-hover'>
            <div tabIndex={0} role='button'>
              <div className='avatar'>
                <div className='w-8 rounded-full md:w-12'>
                  <img src={user?.photoURL} />
                </div>
              </div>
            </div>
            <ul
              tabIndex={0}
              className='menu dropdown-content z-[1] rounded-box bg-base-100 p-2 shadow md:w-52'
            >
              <li onClick={logOut}>
                <a className='text-black'>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <NavLink className='btn btn-xs rounded-none md:btn-md' to={'/login'}>
            Login
          </NavLink>
        )}
        <NavLink className='btn btn-xs rounded-none md:btn-md' to={'/register'}>
          Register
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
