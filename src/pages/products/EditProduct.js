import React, { useEffect, useState } from 'react'
import './editProduct.css'
import { useLocation, useParams } from 'react-router-dom'

function EditProduct() {
    const params = useParams()
    const location = useLocation()
    console.log(params)

    const [productData, setProductData] = useState({
        id: "",
        title: "",
        description: "",
        price: "",
        count: "",
        rate: "",
        category: "",
        image: ""
    })

    useEffect(() => {
        console.log(location)
        const productDataFromLocation = location.state.productData
        console.log(productDataFromLocation)
        const newProductData = {
            id: productDataFromLocation.id,
            title: productDataFromLocation.title,
            description: productDataFromLocation.description,
            category: productDataFromLocation.category,
            price: productDataFromLocation.price,
            image: productDataFromLocation.image,
            count: productDataFromLocation.rating && productDataFromLocation.rating.count,
            rate: productDataFromLocation.rating && productDataFromLocation.rating.rate,
        }
        console.log(newProductData)
        setProductData(newProductData)

    }, [])

    const handleInputChange = (e) => {
        const { value, name, type } = e.target

        setProductData({
            ...productData,
            [name]: value
        })
    }

    return (
        <div className='editProductFormWrapper'>
            <form className='editProductForm'>
                <div className='productFormField'>
                    <label className='productFormFieldLabel'>Id:</label>
                    <input
                        className='productFormFieldInput'
                        type='number'
                        name='id'
                        value={productData.id}
                        placeholder='Enter Product Id'
                        disabled
                        onChange={e => handleInputChange(e)}
                    />
                </div>
                <div className='productFormField'>
                    <label className='productFormFieldLabel'>Title:</label>
                    <textarea
                        className='productFormFieldInput'
                        type='text'
                        name='title'
                        value={productData.title}
                        placeholder='Enter Product Title'
                        onChange={e => handleInputChange(e)}
                    />
                </div>
                <div className='productFormField'>
                    <label className='productFormFieldLabel'>Description:</label>
                    <textarea
                        className='productFormFieldInput'
                        type='text'
                        name='description'
                        value={productData.description}
                        placeholder='Enter Product Description'
                        onChange={e => handleInputChange(e)}
                    />
                </div>
                <div className='productFormField'>
                    <label className='productFormFieldLabel'>Price:</label>
                    <input
                        className='productFormFieldInput'
                        type='number'
                        name='price'
                        value={productData.price}
                        placeholder='Enter Product price'
                        onChange={e => handleInputChange(e)}
                    />
                </div>
                <div className='productFormField'>
                    <label className='productFormFieldLabel'>Category:</label>
                    <textarea
                        className='productFormFieldInput'
                        type='text'
                        name='category'
                        value={productData.description}
                        placeholder='Enter Product Category'
                        onChange={e => handleInputChange(e)}
                    />
                </div>
                <div className='productFormField'>
                    <label className='productFormFieldLabel'>Image:</label>
                    <input
                        className='productFormFieldInput'
                        type='image'
                        name='image'
                        value=<img src={productData.image} height={50} width={50} />
                        placeholder='Enter Product Image'
                        onChange={e => handleInputChange(e)}
                    />
                </div>
                <div className='productFormField'>
                    <label className='productFormFieldLabel'>Count:</label>
                    <input
                        className='productFormFieldInput'
                        type='number'
                        name='count'
                        value={productData.count}
                        placeholder='Enter Product Count'
                        onChange={e => handleInputChange(e)}
                    />
                </div>
                <div className='productFormField'>
                    <label className='productFormFieldLabel'>Rate:</label>
                    <input
                        className='productFormFieldInput'
                        type='number'
                        name='rate'
                        value={productData.rate}
                        placeholder='Enter Product Rate'
                        onChange={e => handleInputChange(e)}
                    />
                </div>
            </form>
        </div>
    )
}

export default EditProduct