import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='mx-auto flex max-w-7xl items-center justify-between border-b border-white px-5 py-6 text-white'>
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
      <div>
        <button>
          <NavLink to={'/login'}>Login</NavLink>
        </button>
        <button>
          <NavLink to={'/register'}>Register</NavLink>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
