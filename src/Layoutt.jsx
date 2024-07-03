import React from 'react'
import { Outlet } from "react-router-dom";
import Header from './components/Header';
import SideNav from './components/SideNav';


function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <SideNav />
    </>
  )
}

export default Layout