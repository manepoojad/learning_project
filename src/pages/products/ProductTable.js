import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Loading from '../../components/Loading'
import './productTable.css'

function Users() {
  const navigate = useNavigate()
  const [productList, setProductList] = useState([])
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    getProductList()
  }, [])

  const getProductList = async () => {
    try {
      setLoading(true)
      const response = await fetch('https://fakestoreapi.com/products', {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
      const responseData = await response.json()
      // console.log(responseData)
      if (!response.ok) {
        throw new Error(responseData)
      }
      setLoading(false);
      setProductList(responseData)
      navigate('/productTable')
    } catch (error) {
      console.log(error)
    }


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
      {loading && <Loading />}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th style={{ width: "20px" }}>S.N</th>
            <th style={{ width: "20px" }}>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th style={{ width: "60px" }}>Category</th>
            <th style={{ width: "50px" }}>Image</th>
            <th style={{ width: "40px" }}>Price</th>
            <th style={{ width: "80px" }}>Rating</th>
            <th style={{ width: "60px" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            productList && productList.map((item, index) => {
              {/* console.log(item) */ }
              {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>{item.category}</td>
                    <td><img src={item.image} height={60} width={60} /></td>
                    <td>{item.price}</td>
                    <td>
                      <span className='productLabel'>count:</span>{item.rating.count},
                      <span className='productLabel'>rate:</span>{item.rating.rate}</td>
                    <td>
                      <button style={{ marginLeft: "8px" }} type="button" onClick={() => handleEditProductData(item)}>Edit</button>
                    </td>
                  </tr>
                )
              }
            })
          }
        </tbody>
      </Table>
    </div>
  )
}

export default Users