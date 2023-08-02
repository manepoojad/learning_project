import React, { useState, useEffect } from 'react'
import './dashboard.css'
import Loading from '../../components/Loading'


function Dashboard() {
    const [productCount, setProductCount] = useState(null)
    const [userCount, setUserCount] = useState(0)
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        getProductCount()
    }, [])

    useEffect(() => {
        getUserCount()
    }, [])

    const getProductCount = async () => {
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

            const count = responseData.length
            setLoading(false);
            setProductCount(count)
        } catch (error) {
            console.log(error)
        }
    }
    // console.log(productCount)

    const getUserCount = async () => {
        try {
            setLoading(true)
            const response = await fetch('https://fakestoreapi.com/users', {
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
            setLoading(false)
            const count = responseData.length
            setUserCount(count)
        } catch (error) {
            console.log(error)
        }
    }
    // console.log(userCount)
    // if (loading) {
    //     return (
    //         <span style={{ fontWeight: "bolder", fontSize: "20px" }}>Loading...</span>
    //     )
    // }

    return (
        <div>
            {loading && <Loading />}
            <div className='countCardWrapper'>
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
        </div>
    )
}

export default Dashboard