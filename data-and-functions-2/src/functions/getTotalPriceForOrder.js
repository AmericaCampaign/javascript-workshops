import getProductById from './getProductById'

const getTotalPriceForOrder = (data, id) => {
  if (data == null || id == null || data.orders == null) {
    throw new Error('Missing data, id, or orders.')
  }
  const order = data.orders.find((o) => o.id === id)
  if (order === undefined) {
    return null
  }
  let totalPrice = 0
  order.products.forEach((p) => {
    totalPrice += getProductById(data, p).price
  })
  return totalPrice
}

export default getTotalPriceForOrder
