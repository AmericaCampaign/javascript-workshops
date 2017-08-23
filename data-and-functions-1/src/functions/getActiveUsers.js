import DATA from '../DATA'

const getActiveUsers = (id) => {
  let activeUserArray = []
  DATA.users.forEach((u) => {
    if (u.accountActive === true) {
      activeUserArray.push(u)
    }
  })
  return activeUserArray
}

export default getActiveUsers
