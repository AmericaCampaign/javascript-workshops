const getUserById = (data, id) => {
  if (data == null || data.users == null || id == null) {
    return null
  } else {
    return data.users.find((u) => u.id === id)
  }
}
export default getUserById
