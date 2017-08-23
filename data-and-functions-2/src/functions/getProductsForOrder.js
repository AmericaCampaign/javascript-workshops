import getProductsById from './getProductsById'

const getProductsForOrder = (DATA, id) => {
  if (DATA == null || DATA.orders == null || id == null) {
    throw new Error('no data, no order, or no id')
  }
  const productsForOrderArray = []
  DATA.orders.forEach((currentOrder) => {
    if (currentOrder.id === id) {
      currentOrder.products.forEach((currentProduct) => {
        productsForOrderArray.push(getProductsById(DATA, currentProduct))
      })
    }
  })
  return productsForOrderArray
}
export default getProductsForOrder
