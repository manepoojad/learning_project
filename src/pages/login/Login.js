import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import loginUsers from './../../components/json/loginUsers.json'

function Login() {
    const navigate = useNavigate()
    const [loginUserList, setLoginUserList] = useState([])
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })

    const handleInputChange = (e) => {
        const { type, value, name } = e.target
        setLoginData({
            ...loginData,
            [name]: value
        })
    }
    // console.log(loginData)

    const handleLogin = () => {
        const logedinUser = loginUsers.find((item) => {
            // console.log(item)
            if (item.email === loginData.email && item.password === loginData.password) {
                return true
            }
            else {
                return false
            }
        })
        console.log("a", logedinUser)
        if (logedinUser) {
            console.log("condition satisfied")
            navigate('/dashboard', { state: { name: logedinUser.name } })
            alert("Welcome!")
        }
        else {
            alert("Email & Password is invalid")
        }
    }

    return (
        <div>
            <h3>Login Page</h3>
            <div>
                <label>Email:</label>
                <input
                    type='email'
                    name='email'
                    value={loginData.email}
                    placeholder='Enter Email'
                    onChange={e => handleInputChange(e)}
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type='password'
                    name='password'
                    value={loginData.password}
                    placeholder='Enter Password'
                    onChange={e => handleInputChange(e)}
                />
            </div>
            <div>
                <button type='button' onClick={() => handleLogin()}>Login</button>
            </div>
        </div>
    )
}

export default Login