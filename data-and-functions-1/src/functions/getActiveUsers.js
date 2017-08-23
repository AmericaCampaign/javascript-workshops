const getActiveUsers = (DATA, id) => {
  if (DATA == null || DATA.users == null || id == null) {
    return null
  }

  const activeUsers = []
  DATA.users.forEach((user) => {
    if (user.accountActive === true) {
      activeUsers.push(user)
    }
  })
  return activeUsers
}

export default getActiveUsers
