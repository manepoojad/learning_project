import React, { useEffect, useState } from 'react'
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
        rating: {
            count: "",
            rate: ""
        },
        category: "",
        image: ""
    })

    useEffect(() => {
        console.log(location)
        const productDataFromLocation = location.state.projectData
        const newProductData = {
            id: productDataFromLocation.id,
            title: productDataFromLocation.title,
            description: productDataFromLocation.description,
            category: productDataFromLocation.category,
            price: productDataFromLocation.price,
            image: <img src={productDataFromLocation.image} height={50} width={50} />,
            count: productDataFromLocation.rating && productDataFromLocation.rating.count,
            rate: productDataFromLocation.rating && productDataFromLocation.rating.rate,
        }

    }, [])

    const handleInputChange = (e) => {
        const { value, name, type } = e.target

        setProductData({
            ...productData,
            [name]: value
        })
    }

    return (
        <div>
            <form>
                <div>
                    <label>Id:</label>
                    <input
                        type='number'
                        name='id'
                        value={productData.id}
                        placeholder='Enter Product Id'
                        onChange={e => handleInputChange(e)}
                    />
                </div>
                <div>
                    <label>Title:</label>
                    <input
                        type='text'
                        name='title'
                        value={productData.title}
                        placeholder='Enter Product Title'
                        onChange={e => handleInputChange(e)}
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <input
                        type='text'
                        name='description'
                        value={productData.description}
                        placeholder='Enter Product Description'
                        onChange={e => handleInputChange(e)}
                    />
                </div>
                <div>
                    <label>Price:</label>
                    <input
                        type='number'
                        name='price'
                        value={productData.price}
                        placeholder='Enter Product price'
                        onChange={e => handleInputChange(e)}
                    />
                </div>
                <div>
                    <label>Category:</label>
                    <input
                        type='text'
                        name='category'
                        value={productData.description}
                        placeholder='Enter Product Category'
                        onChange={e => handleInputChange(e)}
                    />
                </div>
                <div>
                    <label>Image:</label>
                    <input
                        type='image'
                        name='image'
                        value=<img src={productData.image} height={50} width={50} />
                        placeholder='Enter Product Image'
                        onChange={e => handleInputChange(e)}
                    />
                </div>
                <div>
                    <label>Count:</label>
                    <input
                        type='number'
                        name='count'
                        value={productData.rating.count}
                        placeholder='Enter Product Count'
                        onChange={e => handleInputChange(e)}
                    />
                </div>
                <div>
                    <label>Rate:</label>
                    <input
                        type='number'
                        name='rate'
                        value={productData.rating.rate}
                        placeholder='Enter Product Rate'
                        onChange={e => handleInputChange(e)}
                    />
                </div>
            </form>
        </div>
    )
}

export default EditProduct