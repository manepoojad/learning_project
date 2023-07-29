import React from 'react'
import { NavLink } from 'react-router-dom'

function Sidebar() {
  return (
    <div>
        <ul className='navbar'>
        <li><NavLink className='nav-bar-link' to="/">Dashboard</NavLink></li>
        <li><NavLink className='nav-bar-link' to="/products">Products</NavLink></li>
        <li><NavLink className='nav-bar-link' to="/users">Users</NavLink></li>
        </ul>
    </div>
  )
}

export default Sidebar