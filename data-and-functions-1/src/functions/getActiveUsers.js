import DATA from '../DATA.js'

const getActiveUsers = (dataIn) => {
  if(!dataIn || !dataIn.users){
    return null
  }
  return dataIn.users.filter((user) => user.accountActive)
}

export default getActiveUsers
