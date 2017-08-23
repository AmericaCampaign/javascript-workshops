import DATA from '../DATA'

const addOrder = (dataIn, newOrder) => {
  if(!dataIn || !dataIn.orders || !newOrder){
    const err = new Error("Missing data")
    throw err
  }

  if(typeof newOrder !== "object" || !(newOrder.userId && newOrder.products) || newOrder.id){
    const err = new Error("Wrong data-type or wrong format")
    throw err
  }

  const usersLookup = {}
  dataIn.users.forEach((user) => usersLookup[user.id] = user)

  if(!usersLookup[newOrder.userId]){
    const err = new Error("User invalid/not found")
    throw err
  }

  const productsLookup = {}
  dataIn.products.forEach((product) => productsLookup[product.id] = product)

  newOrder.products.forEach((productId) =>{
    if(!productsLookup[productId]){
      const err = new Error("Invalid product id")
      throw err
    }
  })

  newOrder.id = dataIn.orders[dataIn.orders.length-1].id + 1
  dataIn.orders.push(newOrder)
  return newOrder
}

export default addOrder
