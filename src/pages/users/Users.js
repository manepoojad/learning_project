import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './users.css'

function Users() {
  const navigate = useNavigate()
  const [productList, setProductList] = useState([])

  useEffect(() => {
    getProductList()
  }, [])

  const getProductList = async () => {

    const response = await fetch('https://fakestoreapi.com/products', {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    const responseData = await response.json()
    // console.log(responseData)
    setProductList(responseData)
  }
  // console.log(productList)

  const handleEditProductData = (item) => {
    navigate(`/editProduct/${item.id}`, {
      state: {
        productData: { ...item }
      }
    })
  }

  return (
    <div className='productTableWrapper'>
      <table>
        <thead>
          <tr>
            <th style={{width:"20px"}}>S.N</th>
            <th style={{width:"20px"}}>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Category</th>
            <th>Image</th>
            <th>Price</th>
            <th style={{width:"40px"}}>Count</th>
            <th style={{width:"30px"}}>Rate</th>
            <th style={{width:"40px"}}>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            productList && productList.map((item, index) => {
              {/* console.log(item) */}
              {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>{item.category}</td>
                    <td><img src={item.image} height={50} width={50}/></td>
                    <td>{item.price}</td>
                    <td>{item.rating.count}</td>
                    <td>{item.rating.rate}</td>
                    <td>
                      <button type="button" onClick={() => handleEditProductData(item)}>Edit</button>
                    </td>
                  </tr>
                )
              }
            })
          }
        </tbody>
      </table>
      </div>
  )
}

export default Users