import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes';
import { ParallaxProvider } from 'react-scroll-parallax';
import AuthProvider from './AuhProvider/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ParallaxProvider>
        <RouterProvider router={router} />
      </ParallaxProvider>
    </AuthProvider>
  </React.StrictMode>,
);
