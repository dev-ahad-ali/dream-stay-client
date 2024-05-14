import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../Components/Footer/Footer';

const Root = () => {
  const location = useLocation();

  return (
    <>
      <header
        className={`${location.pathname === '/' && 'absolute'} left-0 top-0 z-10 w-full ${location.pathname !== '/' ? 'bg-gray-800' : 'bg-transparent'}`}
      >
        <Navbar />
      </header>
      <Outlet />
      <Footer />
      <ToastContainer
        position='top-left'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Zoom}
      />
    </>
  );
};

export default Root;
