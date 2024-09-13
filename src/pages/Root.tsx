import React from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import SideNavigationBar from '../components/SideNavigationBar';

const RootLayout: React.FC = () => {
  return (
    <>
      <SideNavigationBar />
      <main className='p-4 sm:ml-64'>
        <Outlet />
      </main>
      <ToastContainer />
    </>
  )
}

export default RootLayout