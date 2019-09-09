import React, { useState } from 'react'
import { Link } from "react-router-dom";

const AddUserForm = props => {
  const initialFormState = { id: 0, name: '' }
  const [user, setUser] = useState(initialFormState)

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <React.Fragment>
      <h2>Add user</h2>
      <form
        onSubmit={event => {
          event.preventDefault()
          if (!user.name) return

          props.addUser(user)
          setUser(initialFormState)
          alert("Salvo com sucesso")
        }}
      >
        <label>Name</label>
        <input type="text" name="name" value={user.name} onChange={handleInputChange} />
        <label>Id</label>
        <input type="number" name="id" value={user.id} onChange={handleInputChange} />

        <button>Add User </button>
        <Link to="/">
          <button>Voltar</button>
        </Link>
      </form>
    </React.Fragment>
  )
}


export default AddUserForm