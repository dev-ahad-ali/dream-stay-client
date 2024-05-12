import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/Root';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import OurRooms from '../Pages/OurRooms';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import RoomDetails from '../Pages/RoomDetails';
import { url } from '../Utils/url';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <div>Error.........</div>,
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
        element: (
          <PrivateRoute>
            <OurRooms />
          </PrivateRoute>
        ),
      },
      {
        path: '/roomDetails/:_id',
        element: (
          <PrivateRoute>
            <RoomDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`${url}/rooms/${params._id}`),
      },
    ],
  },
]);
