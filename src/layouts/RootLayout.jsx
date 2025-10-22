import React from 'react'
import Navbar from '../Components/shared/Navbar'
import { Outlet } from 'react-router'
import Footer from '../Components/shared/Footer'

const RootLayout = () => {
  return (
    <div>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default RootLayout