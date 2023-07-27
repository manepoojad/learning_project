import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Dashboard from '../pages/dashboard/Dashboard'
import Login from '../pages/login/Login'


function Routing() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
                
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Routing