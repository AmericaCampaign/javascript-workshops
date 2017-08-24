const getUserById = (data, userId) => {
  if (userId == null) {
    return null
  }
  if (data == null) {
    return null
  }
  if (data.users == null) {
    return null
  }
  for (let i = 0; i < data.users.length; i += 1) {
    const currentUser = data.users[i]
    if (currentUser.id === userId) {
      return currentUser
    }
  }
}

export default getUserById
