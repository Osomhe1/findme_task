import React from 'react'
import Pagination from './Pagenation'
// import Pagination from './Pagination'

function UserPage() {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
    { id: 4, name: 'Dave' },
    { id: 5, name: 'Eve' },
    { id: 6, name: 'Frank' },
    { id: 7, name: 'Grace' },
    { id: 8, name: 'Helen' },
    { id: 9, name: 'Ivy' },
    { id: 10, name: 'Jack' },
    { id: 11, name: 'Kate' },
    { id: 12, name: 'Liam' },
    { id: 13, name: 'Mia' },
    { id: 14, name: 'Nora' },
    { id: 15, name: 'Oliver' },
    { id: 16, name: 'Penny' },
    { id: 17, name: 'Quinn' },
    { id: 18, name: 'Ryan' },
    { id: 19, name: 'Sofia' },
    { id: 20, name: 'Tom' },
  ]

  const renderUsers = (data) => {
    return (
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    )
  }

  return (
    <div className="App">
      <h1>Users</h1>
      <Pagination
        data={users}
        RenderComponent={renderUsers()}
        title="User List"
        pageLimit={5}
        dataLimit={4}
      />
    </div>
  )
}

export default UserPage
