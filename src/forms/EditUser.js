import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

const EditUserForm = props => {
  const [user, setUser] = useState(props.currentUser)

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }
  
  useEffect(() => {
    setUser(props.currentUser)
  }, [props])

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        props.updateUser(user.id, user)
      }}
    >
      <label>Name</label>
      <input type="text" name="name" value={user.name} onChange={handleInputChange} />
      <label>Id</label>
      <input type="number" name="id" value={user.id} onChange={handleInputChange} />
      <button>Update user</button>
      <Link to="/">
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
      </Link>
    </form>
  )
}

export default EditUserForm