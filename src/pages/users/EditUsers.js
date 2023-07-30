import React, { useEffect, useState } from 'react'
import './editUsers.css'
import { useLocation } from 'react-router-dom'


function EditUsers() {
  const location = useLocation()
  // console.log(location)

  const [usersData, setUsersData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    phone: "",
    city: "",
    number: "",
    street: "",
    zipCode: "",
    lat: "",
    long: ""
  })

  useEffect(() => {
    // console.log(location)
    const usersDataFromLocation = location.state.usersData
    // console.log(usersDataFromLocation)
    const newUsersData = {
      id: usersDataFromLocation.id,
      firstName: usersDataFromLocation.name.firstname,
      lastName: usersDataFromLocation.name.lastname,
      userName: usersDataFromLocation.username,
      email: usersDataFromLocation.email,
      password: usersDataFromLocation.password,
      phone: usersDataFromLocation.phone,
      city: usersDataFromLocation.address.city,
      number: usersDataFromLocation.address.number,
      street: usersDataFromLocation.address.street,
      zipCode: usersDataFromLocation.address.zipcode,
      lat: usersDataFromLocation.address.geolocation && usersDataFromLocation.address.geolocation.lat,
      long: usersDataFromLocation.address.geolocation && usersDataFromLocation.address.geolocation.long,
    }
    //  console.log(newUsersData)
    setUsersData(newUsersData)

  }, [])

  const handleInputChange = (e) => {
    const { value, name, type } = e.target

    setUsersData({
      ...usersData,
      [name]: value
    })
  }
  // console.log(usersData)
  return (
    <div className='editUserFormWrapper'>
      <form className='editUserForm'>
        <div className='formField'>
          <label className='formFieldLabel'>Id:</label>
          <input
            className='formFieldInput'
            type='number'
            name='id'
            value={usersData.id}
            placeholder='Enter user Id'
            disabled
            onChange={e => handleInputChange(e)}
          />
        </div>
        <div className='formField'>
          <label className='formFieldLabel'>First Name:</label>
          <input
            className='formFieldInput'
            type='text'
            name='firstName'
            value={usersData.firstName}
            placeholder='Enter User First Name'
            onChange={e => handleInputChange(e)}
          />
        </div>
        <div className='formField'>
          <label className='formFieldLabel'>Last Name:</label>
          <input
            className='formFieldInput'
            type='text'
            name='lastName'
            value={usersData.lastName}
            placeholder='Enter User Last Name'
            onChange={e => handleInputChange(e)}
          />
        </div>
        <div className='formField'>
          <label className='formFieldLabel'>User Name:</label>
          <input
            className='formFieldInput'
            type='text'
            name='userName'
            value={usersData.userName}
            placeholder='Enter User Name'
            onChange={e => handleInputChange(e)}
          />
        </div>
        <div className='formField'>
          <label className='formFieldLabel'>Email:</label>
          <input
            className='formFieldInput'
            type='email'
            name='email'
            value={usersData.email}
            placeholder='Enter  User Email'
            onChange={e => handleInputChange(e)}
          />
        </div>
        <div className='formField'>
          <label className='formFieldLabel'>Password:</label>
          <input
            className='formFieldInput'
            type='password'
            name='password'
            value={usersData.password}
            placeholder='Enter Password'
            onChange={e => handleInputChange(e)}
          />
        </div>
        <div className='formField'>
          <label className='formFieldLabel'>Phone:</label>
          <input
            className='formFieldInput'
            type='text'
            name='phone'
            value={usersData.phone}
            placeholder='Enter Phone'
            onChange={e => handleInputChange(e)}
          />
        </div>
        <div className='formField'>
          <label className='formFieldLabel'>City:</label>
          <input
            className='formFieldInput'
            type='text'
            name='city'
            value={usersData.city}
            placeholder='Enter City'
            onChange={e => handleInputChange(e)}
          />
        </div>
        <div className='formField'>
          <label className='formFieldLabel'>Number:</label>
          <input
            className='formFieldInput'
            type='number'
            name='number'
            value={usersData.number}
            placeholder='Enter number'
            onChange={e => handleInputChange(e)}
          />
        </div>
        <div className='formField'>
          <label className='formFieldLabel'>Street:</label>
          <input
            className='formFieldInput'
            type='text'
            name='street'
            value={usersData.street}
            placeholder='Enter Street'
            onChange={e => handleInputChange(e)}
          />
        </div>
        <div className='formField'>
          <label className='formFieldLabel'>ZipCode:</label>
          <input
            className='formFieldInput'
            type='text'
            name='zipCode'
            value={usersData.zipCode}
            placeholder='Enter ZipCode'
            onChange={e => handleInputChange(e)}
          />
        </div>
        <div className='formField'>
          <label className='formFieldLabel'>Geolocation:</label>
          <input
            className='formFieldInput'
            type='number'
            name='lat'
            value={usersData.lat}
            placeholder='Enter lat'
            onChange={e => handleInputChange(e)}
          />
          <input
            className='formFieldInput'
            type='number'
            name='long'
            value={usersData.long}
            placeholder='Enter long'
            onChange={e => handleInputChange(e)}
          />
        </div>
      </form>
    </div>
  )
}

export default EditUsers