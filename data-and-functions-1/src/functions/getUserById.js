import DATA from '../DATA'

const getUserById = (userId) => {
  let user
  if (userId == null || DATA == null || DATA.users == null) {
    return null
  } else {
    DATA.users.forEach((u) => {
      if (u.userId === id) {
        user = u
      }
    })
  }
  return user
}

export default getUserById
