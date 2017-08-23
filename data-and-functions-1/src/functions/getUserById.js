const getUserById = (DATA, userId) => {
  let user
  if (userId == null || DATA == null || DATA.users == null) {
    return null
  } else {
    DATA.users.forEach((u) => {
      if (u.userId === DATA.id) {
        user = u
      }
    })
  }
  return user
}

export default getUserById
