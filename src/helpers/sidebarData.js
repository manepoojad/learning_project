import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';

export const  sidebarData=[
    {
        title:"Dashboard",
        icon:<DashboardIcon/>,
        link:'/dashboard'
    },
    {
        title:"Products",
        link:'/products'
    },
    {
        title:"Users",
        icon:<PeopleIcon/>,
        link:'/users'
    },
    {
        title:"Logout",
        // icon:<LogoutIcon/>,
        link:'/login'
    },
] 
 