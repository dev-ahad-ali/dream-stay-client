import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/Root';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import OurRooms from '../Pages/OurRooms';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import RoomDetails from '../Pages/RoomDetails';
import { url } from '../Utils/url';
import Booking from '../Pages/Booking';
import MyBookings from '../Pages/MyBookings';
import Error from '../Pages/Error';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/ourRooms',
        element: <OurRooms />,
      },
      {
        path: '/roomDetails/:_id',
        element: <RoomDetails />,
        loader: ({ params }) => fetch(`${url}/rooms/${params._id}`),
      },
      {
        path: '/booking',
        element: (
          <PrivateRoute>
            <Booking />
          </PrivateRoute>
        ),
      },
      {
        path: '/myBookings/:email',
        element: (
          <PrivateRoute>
            <MyBookings />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
