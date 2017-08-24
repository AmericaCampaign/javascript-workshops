import DATA from '../DATA.js'

const getUserById = (dataIn, user_id) => {
  if(!dataIn || !dataIn.users || !user_id){
    return null
  }
  return dataIn.users.find((user) => user.id === user_id)
}

export default getUserById
