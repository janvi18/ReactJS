import React from 'react'

export const Users = () => {
  var users = [
    {
      name: "Janvi",
      age: 19,
      location: "Anand"
    },
    {
      name: "Shanvi",
      age: 14,
      location: "Rajkot"
    },
    {
      name: "Escobar",
      age: 34,
      location: "Maxico"
    }
  ]
  return (
    <div>

      {
        users.map((user) => {
          return (
            <ul>
              <li>{user.name}</li>
            </ul>
          )
        })
      }
    </div>
  )
}