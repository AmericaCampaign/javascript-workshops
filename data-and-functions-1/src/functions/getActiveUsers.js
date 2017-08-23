const getActiveUsers = (DATA, id) => {
  if (DATA == null || DATA.users == null) {
    return null
  } else {
    const activeUsers = []
    DATA.users.forEach((user) => {
      if (user.accountActive === true) {
        activeUsers.push(user)
      }
    })
    return activeUsers
  }
}

export default getActiveUsers
