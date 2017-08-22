import DATA from '../DATA'

const getUsersById = (DATA, id) => {
  if (DATA == null || DATA.users == null || id == null) {
    return null
  }

  let foundUser

  for (let i = 0; i < DATA.users.length; i++) {
    const currentUser = DATA.users[i]

    if (currentUser.id === id) {
      foundUser = currentUser
    }
  }
  return foundUser
}
export default getUsersById
