import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigation() {
  return (
    <div>
    <li><NavLink className="navbar" to="/">Dashboard</NavLink></li>
    <li><NavLink className="navbar" to="/login">Login</NavLink></li>
    </div>
  )
}

export default Navigation