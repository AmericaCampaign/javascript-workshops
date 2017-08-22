import DATA from '../DATA'

const getProductByID = (DATA, id) => {
  if (DATA == null || DATA.products == null || id == null) {
    return null
  }
  let productFound

  for (let i = 0; i < DATA.products.length; i++) {
    const currentProduct = DATA.products[i]

    if (currentProduct.id === id) {
      productFound = currentProduct
    }
  }
  return productFound
}

export default getProductByID

// const getUsersById = (DATA, id) => {
//   if (DATA == null || DATA.users == null || id == null) {
//     return null
//   }
//
//   let foundUser
//
//   for (let i = 0; i < DATA.users.length; i++) {
//     const currentUser = DATA.users[i]
//
//     if (currentUser.id === id) {
//       foundUser = currentUser
//     }
//   }
//   return foundUser
// }
// export default getUsersById
