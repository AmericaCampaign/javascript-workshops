let product
const getProductsById = (DATA, id) => {
  DATA.products.forEach((p) => {
    if (p.id === id) {
      product = p
    }
  })
  return product
}

const getProductsForOrder = (DATA, id) => {
  if (DATA == null || DATA.orders == null || id == null) {
    throw new Error('no data, no order, or no id')
  }

  const productsForOrderArray = []
  DATA.orders.forEach((currentOrder) => {
    if (currentOrder.id === id) {
      currentOrder.products.forEach((currentProduct) => {
        productsForOrderArray.push({
          id: currentProduct,
          product: getProductsById(currentProduct),
          price: currentProduct.price
        })
      })
    }
  })
  if (productsForOrderArray.length === 0) {
    return null
  } else {
    return productsForOrderArray
  }
}
export default getProductsForOrder
