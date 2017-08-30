import DATA from '../DATA'

const getActiveUsers = (DATA) => {
  if (DATA == null || DATA.users == null) {
    return null
  }

  let activeUsers = []

  DATA.users.forEach((user) => {
    if (user.accountActive === true) {
      activeUsers.push(user)
    }
  })

  return activeUsers
}

export default getActiveUsers

// passes
