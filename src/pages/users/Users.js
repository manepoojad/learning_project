import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Table } from 'react-bootstrap'
import './users.css'
import Loading from '../../components/Loading'



function Users() {
  const navigate = useNavigate()
  const [usersList, setUsersList] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getUsersList()
  }, [])

  const getUsersList = async () => {
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
      setUsersList(responseData)

    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }
  // console.log(usersList)

  const handleEditUsersData = (item) => {
    navigate(`/editUsers/${item.id}`, {
      state: {
        usersData: { ...item }
      }
    })
  }

  const handleDeleteUsersData = (clickItemIndex) => {
    const arr = usersList.filter((item, index) => {
      //  console.log(item)
      if (index < clickItemIndex) {
        return false
      }
      else {
        return true
      }
    })
    // console.log(arr)
    setUsersList(arr)
  }
  // console.log(usersList)

  return (
    <div className='usersTableWrapper'>
      {loading && <Loading />}
      <Table striped bordered hover>
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
          {usersList && usersList.map((item, index) => {
            {/* console.log(item)  */ }

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
                  <button
                    style={{ width: "auto", paddingRight: "15px", paddingLeft: "15px" }}
                    type="button"
                    onClick={() => handleDeleteUsersData(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  )
}

export default Users