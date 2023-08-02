import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/home/Dashboard'
import Products from '../pages/products/Products'
import Users from '../pages/users/Users'
import EditProduct from '../pages/products/EditProduct'
import EditUsers from '../pages/users/EditUsers'
import ProductTable from '../pages/products/ProductTable'
function PostLoginRoutes() {
  return (
    <Routes>
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/products' element={<Products />} />
      <Route path='/productTable' element={<ProductTable />} />
      <Route path='/users' element={<Users />} />
      <Route path="/editProduct/:id" element={<EditProduct />} />
      <Route path="/editUsers/:id" element={<EditUsers />} />
    </Routes>
  )
}

export default PostLoginRoutes