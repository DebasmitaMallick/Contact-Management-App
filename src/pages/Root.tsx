import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SideNavigationBar from '../components/SideNavigationBar';

/**
 * RootLayout Component
 * This component serves as the main layout for the application, 
 * including a side navigation bar, a main content area, and the toast notifications.
 */
const RootLayout: React.FC = () => {
  return (
    <>
      {/* Side Navigation Bar */}
      <SideNavigationBar />

      {/* Main content area which will render nested routes using Outlet */}
      <main className='p-4 sm:ml-64'>
        <Outlet />
      </main>

      {/* ToastContainer for displaying toast notifications */}
      <ToastContainer />
    </>
  );
};

export default RootLayout;