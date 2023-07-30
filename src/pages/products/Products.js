import React, { useState, useEffect } from 'react'
import './productTable.css'

function Products() {
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
  console.log(productList)

  return (
    <div className='productPage'>
      {
        productList && productList.map((item, index) => {
          return (
            <div key={index} className='productCard'>
              <div className='productImageTitle'>
                <img src={item.image} height={50} width={50}/>
                <p><span className='productLabel'>Title:</span> {item.title}</p>
              </div>
              <div className='productDetail'>
                <p className='productDescription'><span className='productLabel'>Description:</span> {item.description}</p>
                <p className="productPrice"><span className='productLabel' style={{marginRight:"2px"}}>Price:</span>{item.price}</p>
              </div>
            </div>
          )
        })}
    </div>
  )
}
export default Products