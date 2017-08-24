import getProductById from './getProductById'

const getTotalPriceForOrder = (data, id) => {
  if (data == null || id == null || data.orders == null) {
    throw new Error('There are no orders')
  }
  const order = data.orders.find((o) => o.id === id)
  if (order === undefined) {
    return null
  }
  let totalOrderPrice = 0
  order.products.forEach((p) => {
    totalOrderPrice += getProductById(data, p).price
  })
  return totalOrderPrice
}

export default getTotalPriceForOrder
