import DATA from '../DATA'

const getProductsForOrder = (dataIn,orderId) => {
  if(!dataIn || !dataIn.orders || !orderId){
    const err = new Error("Error")
    throw err
  }

  let lookupOrder = {}
  dataIn.orders.forEach((order)=> lookupOrder[order.id] = order)

  if(!lookupOrder[orderId]) return null

  let productLookup = {}
  dataIn.products.forEach((product) => productLookup[product.id] = product)

  return lookupOrder[orderId].products.map((productId) => productLookup[productId])
}

export default getProductsForOrder
