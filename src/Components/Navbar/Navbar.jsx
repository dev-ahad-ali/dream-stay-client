import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  return (
    <div
      className={`mx-auto flex max-w-7xl items-center justify-between border-b ${location.pathname !== '/' ? 'bg-gray-800' : 'bg-transparent'} px-5 py-6 text-white`}
    >
      <nav>
        <ul className='flex items-center gap-5'>
          <li>
            <NavLink>Our Rooms</NavLink>
          </li>
          <li>
            <NavLink>My Bookings</NavLink>
          </li>
        </ul>
      </nav>
      <NavLink to={'/'} className={'flex items-center gap-2'}>
        <img className='w-12' src='/logo.png' alt='' />
        <span className='text-2xl font-semibold uppercase'>Dream Stay</span>
      </NavLink>
      <div className='flex items-center gap-4'>
        <NavLink className='btn' to={'/login'}>
          Login
        </NavLink>
        <NavLink className='btn' to={'/register'}>
          Register
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
