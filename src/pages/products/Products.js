import React, { useState, useEffect } from 'react'
import './productTable.css'
import Loading from '../../components/Loading'
import ProductDeleteModal from '../../components/ProductDeleteModal'

function Products() {

  const [productList, setProductList] = useState([])
  const [readMore, setReadMore] = useState(false)
  const [loading, setLoading] = useState(false)
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false)
  const [deleteProductItem, setDeleteProductItem] = useState(null)


  const linkName = readMore ? 'Read Less << ' : 'Read More >> '

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
    } catch (error) {
      console.log(error)
    }
  }
  // console.log(productList)

  const handleShowDeleteProductModal = (productItem) => {
    setIsShowDeleteModal(true)
    console.log(productItem)
    setDeleteProductItem(productItem)
  }


  const handleHideProductDeleteModal = () => {
    setIsShowDeleteModal(false)
  }

  const handleDeleteProduct = () => {
    console.log("Function called")
    const arr = productList.filter((item) => {
      if (item.id == deleteProductItem.id) {
        return false
      }
      else {
        return true
      }
    })
    console.log(arr)
    setProductList(arr)
    setIsShowDeleteModal(false)
  }


  // if (loading) {
  //   return (
  //     <span style={{fontWeight:"bolder",fontSize:"20px"}}>Loading...</span>
  //   )
  // }

  return (
    <div className='productPage'>
      {loading && <Loading />}
      <ProductDeleteModal
        showModal={isShowDeleteModal}
        handleHideModal={() => handleHideProductDeleteModal()}
        handleOkModal={() => handleDeleteProduct()}
      />

      {
        productList && productList.map((item, index) => {
          return (
            <div key={index} className='productCard' >
              <div className='productImageTitle'>
                <img src={item.image} height={80} width={80} onClick={() => handleShowDeleteProductModal(item)} />
                <p><span className='productLabel'>Title:</span>
                  {item.title}
                </p>
              </div>
              <div className='productDetail'>
                <p className='productDescription'>
                  <span className='productLabel'>Description:</span>
                  <a className="read-more-link" onClick={() => { setReadMore(!readMore) }}>{linkName}</a>
                  {readMore && item.description}
                </p>
                <p className="productPrice">
                  <span className='productLabel' style={{ marginRight: "2px" }}>Price:</span>
                  {item.price}
                </p>
              </div>
              <a href="http://localhost:3000/productTable">product Table</a>
            </div>
          )
        })}
    </div>
  )
}
export default Products