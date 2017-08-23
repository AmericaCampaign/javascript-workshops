
const getPriceById = (DATA, id) => {
  let price
  DATA.products.forEach((p) => {
    if (p.id === id) {
      price = p.price
    }
  })
  return price
}

const getTotalPriceForOrder = (DATA, id) => {
  if (DATA == null || DATA.orders == null || id == null) {
    throw new Error('Error')
  }
  const order = DATA.orders.find((currentOrder) => currentOrder.id === id)
  if (!order) {
    return null
  }
  let totalPrice = 0
  order.products.forEach((currentProduct) => {
    totalPrice += getPriceById(DATA, currentProduct)
  })
  return totalPrice
}

export default getTotalPriceForOrder
