import React, { useEffect, useState } from 'react'
import './users.css'
import { useNavigate } from 'react-router-dom'


function Users() {
  const navigate = useNavigate()
  const [usersList, setUsersList] = useState([])

  useEffect(() => {
    getUsersList()
  }, [])

  const getUsersList = async () => {

    const response = await fetch('https://fakestoreapi.com/users', {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    const responseData = await response.json()
    // console.log(responseData)
    setUsersList(responseData)
  }
  // console.log(usersList)

  const handleEditUsersData = (item) => {
    navigate(`/editUsers/${item.id}`, {
      state: {
        usersData: { ...item }
      }
    })
  }

  return (
    <div className='usersTableWrapper'>
      <table>
        <thead>
          <tr>
            <th style={{ width: "18px" }}>ID</th>
            <th style={{ width: "75px" }}>Name</th>
            <th style={{ width: "55px" }}>User Name</th>
            <th style={{ width: "100px" }}>Email</th>
            <th style={{ width: "80px" }}>Phone</th>
            <th style={{ width: "150px" }}>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            usersList && usersList.map((item, index) => {
              {/* console.log(item) */ }
              {
                return (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name.firstname} {item.name.lastname}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>
                      <b>City:</b>{item.address.city}<br />
                      <b>Street:</b>{item.address.street},<br />
                      <b>Number:</b>{item.address.number},<br />
                      <b>ZipCode:</b>{item.address.zipcode}
                    </td>
                    <td style={{ margin: "0px" }}>
                      <button
                        style={{ width: "auto", paddingRight: "15px", paddingLeft: "15px" }}
                        type="button"
                        onClick={() => handleEditUsersData(item)}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                )
              }
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Users