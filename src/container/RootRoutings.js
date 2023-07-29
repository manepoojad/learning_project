import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../pages/login/Login'
import PostLoginContainer from './PostLoginContainer'


function RootRoutings() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/*"
          element={<PostLoginContainer />}
        />

      </Routes>
    </BrowserRouter>
  )
}

export default RootRoutings