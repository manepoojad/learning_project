import React, { useState, useEffect } from 'react'
import './dashboard.css'

function Dashboard() {
    const [productCount, setProductCount] = useState(null)
    const [userCount, setUserCount] = useState(null)

    useEffect(() => {
        getProductCount()
    }, [])

    useEffect(() => {
        getUserCount()
    }, [])

    const getProductCount = async () => {
        const response = await fetch('https://fakestoreapi.com/products', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const responseData = await response.json()
        // console.log(responseData)
        const count = responseData.length
        setProductCount(count)
    }
    // console.log(productCount)

    const getUserCount = async () => {
        const response = await fetch('https://fakestoreapi.com/users', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const responseData = await response.json()
        // console.log(responseData)
        const count = responseData.length
        setUserCount(count)
    }
    // console.log(userCount)

    return (
        <div className='dashboard'>
            <div className='count'>
                <span className='countLabel'>
                    Products Count
                </span>
                {productCount}
            </div>
            <div className='count'>
                <span className='countLabel'>
                    Users Count
                </span>
                {userCount}
            </div>
        </div>
    )
}

export default Dashboard