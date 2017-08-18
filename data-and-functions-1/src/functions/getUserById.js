const getUserById = (data, id) => {

  // im modifying my getUserById function by adding comments
  // lets see what happens

  let user

  if (id == null || data == null || data.users == null) {
    return null
  } else {
    for (let i = 0; i < data.users.length; i++) {
      if (data.users[i].id === id) {
        user = data.users[i]
      }
    }
  }

  return user
}

export default getUserById
