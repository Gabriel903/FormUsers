import React from 'react'
import { Link } from "react-router-dom";

const UserTable = (props) => (
	<React.Fragment>
	<h2>View users</h2>
	<Link to="/Add">
		<button>New User</button>
	</Link>
	<table>
		<thead>
			<tr>
				<th>Id</th>
				<th>Nome</th>
				<th>Actions</th>
			</tr>
		</thead>
		<tbody>
			{props.users.length > 0 ? (
				props.users.map(user => (
					<tr key={user.id}>
						<td>{user.id}</td>
						<td>{user.name}</td>
						<td>
							<Link to="/Edit"><button className="button muted-button" onClick={() => props.editRow(user)}>Edit</button></Link>
							<button className="button muted-button" onClick={() => props.deleteUser(user.id)}>Delete</button>
						</td>
					</tr>
				))
			) : (
					<tr>
						<td colSpan={3}>No users</td>
					</tr>
				)}
		</tbody>
	</table>
	</React.Fragment>
)

export default UserTable