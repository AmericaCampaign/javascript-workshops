
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
    throw new Error('no data, orders, or id is null')
  }
  const priceForOrderArray = []
  DATA.orders.forEach((currentOrder) => {
    if (currentOrder.id === id) {
      currentOrder.products.forEach((currentProduct) => {
        priceForOrderArray.push({
          id: currentProduct,
          price: getPriceById(currentProduct)
        })
      })
    }
  })
  if (priceForOrderArray.length === 0) {
    return null
  } else {
    return priceForOrderArray
  }
}

export default getTotalPriceForOrder
