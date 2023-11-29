import React from 'react'
import { Outlet } from 'react-router-dom'

import Footer from './Footer'
import Nav from './Navbar'

export default function Layout() {
  return (
    <>
       
       
        <Nav/>
        <Footer/>   
        <Outlet/>
    </>
  )
}
