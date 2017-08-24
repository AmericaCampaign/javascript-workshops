import DATA from '../DATA'

const getTotalPriceForOrder = (dataIn, orderId) => {
  if(!dataIn || !dataIn.orders || !orderId){
    const err = new Error("Error")
    throw err
  }

  let lookupOrder = {}
  dataIn.orders.forEach((order) => lookupOrder[order.id] = order)

  if(!lookupOrder[orderId]) return null

  let lookupProduct = {}
  dataIn.products.forEach((product) => lookupProduct[product.id] = product)

  return lookupOrder[orderId].products.reduce((sum, productId) => sum + lookupProduct[productId].price,0)
}

export default getTotalPriceForOrder
