import React, { useState } from 'react'
import UserTable from './tables/UserTable'
import AddUser from './forms/AddUser'
import EditUser from './forms/EditUser'

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
	const usersData = [
		{ id: 1, name: 'Naruto' },
		{ id: 2, name: 'Sasuke' },
		{ id: 3, name: 'Sakura' },
		{ id: 4, name: 'Sai' },
		{ id: 5, name: 'Kakashi' },
	]

	const [users, setUsers] = useState(usersData)
	const [editing, setEditing] = useState(false)

	const initialFormState = { id: null, name: '' }
	const [currentUser, setCurrentUser] = useState(initialFormState)

	const editRow = user => {
		setEditing(true)
		setCurrentUser({ id: user.id, name: user.name })
	}

	const addUser = user => {
		users.map(alreadyUsers => {
			if (alreadyUsers.id === user.id) {
				return alert("Desculpe, id já existe")
			}
			else {
				setUsers([...users, user])
			}
		})
	}

	const deleteUser = id => {
		setEditing(false)
		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updateUser) => {
		setEditing(false)
		setUsers(users.map(user => (user.id === id ? updateUser : user)))
	}

	return (
		<Router>
			<div className="container">
				<h1>Form Users</h1>
				<div className="flex-row">
					<div className="flex-large">
						<Route
							exact
							path="/"
							component={() =>
								<UserTable
									users={users}
									editRow={editRow}
									deleteUser={deleteUser}
								/>}
						/>
					</div>
					<div className="flex-large">
						{editing ? (
							<div>
								<h2>Edit user</h2>
								<Route path="/Edit" component={() =>
									<EditUser
										editing={editing}
										setEditing={setEditing}
										currentUser={currentUser}
										updateUser={updateUser}
									/>}
								/>
							</div>
						) : (
								<div>
									<Route
										path="/Add"
										component={() => <AddUser addUser={addUser} />}
									/>
								</div>
							)}
					</div>
				</div>
			</div>
		</Router>
	)

}

export default App