import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/home/Dashboard'
import Products from '../pages/products/Products'
import Users from '../pages/users/Users'
import EditProduct from '../pages/products/EditProduct'
function PostLoginRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/products' element={<Products />} />
      <Route path='/users' element={<Users />} />
      <Route path="/editProduct/:id" element={<EditProduct />} />
    </Routes>
  )
}

export default PostLoginRoutes