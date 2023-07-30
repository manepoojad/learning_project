import React from 'react'
import './sidebarNav.css'
import { NavLink } from 'react-router-dom'
import { sidebarData } from '../../helpers/sidebarData'

function SidebarNav() {
    return (
        <ul className='sidebarList'>
            {
                sidebarData.map((item, index) => {
                    {/* console.log(item) */}
                    return (
                        <li key={index}>
                            <NavLink to={item.link} className='anchorTagSideBarRow' >
                                <div className='sidebarIcon'>{item.icon}</div>
                                <div className='sidebarTitle'>{item.title}</div>
                            </NavLink>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default SidebarNav