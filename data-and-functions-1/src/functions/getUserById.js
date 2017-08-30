const getUserById = (DATA, id) => {
  if (DATA == null || DATA.users == null || id == null) {
    return null
  }

  let user

  DATA.users.forEach((u) => {
    if (u.id === id) {
      user = u
    }
  })
  return user
}

export default getUserById
