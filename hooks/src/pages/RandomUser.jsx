import React, { useState, useEffect } from 'react'

function RandomUser() {

  let [user, setUser] = useState(null)

  const loadUserData = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/")

      const data = await response.json()
      setUser(data.results[0])
    } catch (error) {
      console.log(error)
      alert("Something went wrong")
    }
  }

  useEffect(() => {
    loadUserData()
  }, [])

  return (
    <>
      <h1>Random User Page</h1>
      <p>Gender : {user?.gender}</p>
      <p>Name : {user?.name?.title} {user?.name?.first} {user?.name?.last}</p>
      <p>City : {user?.location?.city}</p>
      <p>Country :{user?.location?.country}</p>
      <p>Email : {user?.email}</p>
      <p>Phone : {user?.phone}</p>
      <img src={user?.picture?.medium} alt='' height={"200px"} />
      <br /><br />
      <button onClick={loadUserData}>Next User</button>
    </>
  )
}

export default RandomUser