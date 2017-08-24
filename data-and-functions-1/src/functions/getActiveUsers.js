
const getActiveUsers = (data) => {
  if (data == null || data.users == null) {
    return null
  } else {
    const activeUsers = []
    data.users.forEach((u) => {
      if (u.accountActive === true) {
        activeUsers.push(u)
      }
    })
    return activeUsers
  }
}
export default getActiveUsers
