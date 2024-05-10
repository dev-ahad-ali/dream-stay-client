import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/Root';
import Home from '../Pages/Home';

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
    ],
  },
]);
