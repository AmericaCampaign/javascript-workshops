import DATA from '../DATA'

const getActiveUsers = () => {
  let activeUsers = []

  DATA.users.forEach((user) => {
    if (user.accountActive === true) {
      activeUsers.push(user)
    }
  })

  return activeUsers
}

export default getActiveUsers
