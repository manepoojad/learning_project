import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './login.css'
import loginUsers from './../../helpers/loginUsers.json'

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
        <div className='loginFormWrapper'>
        <form className='loginForm'>
            <div className='loginFormField'>
                <label className='loginFormLabel'>Email:</label>
                <input
                    className='loginFormFieldInput'
                    type='email'
                    name='email'
                    value={loginData.email}
                    placeholder='Enter Email'
                    onChange={e => handleInputChange(e)}
                />
            </div>
            <div className='loginFormField'>
                <label className='loginFormLabel'>Password:</label>
                <input
                    className='loginFormFieldInput'
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
        </form>
        </div>
    )
}

export default Login