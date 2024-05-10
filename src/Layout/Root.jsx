import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';

const Root = () => {
  return (
    <>
      <header className='absolute left-0 top-0 z-10 w-full'>
        <Navbar />
      </header>
      <Outlet />
    </>
  );
};

export default Root;
