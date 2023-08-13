import React from 'react'
import { Outlet } from "react-router-dom"
import Nav from "./Nav"

const Layout = () => {
  return (
    <div>
        <Nav />
        <div className="container">
          <Outlet />
        </div>
    </div>
  )
}

export default Layout