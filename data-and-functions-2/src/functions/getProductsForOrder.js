import getProductsById from './getProductsById'

const getProductsForOrder = (DATA, id) => {
  if (DATA == null || DATA.orders == null || id == null) {
    throw new Error('no data, no order, or no id')
  }
  const productsForOrderArray = []
  const order = DATA.orders.find(o => o.id === id)

  if (!order) {
    return null
  }
  order.products.forEach((currentProduct) => {
    productsForOrderArray.push(getProductsById(DATA, currentProduct))
  })
  return productsForOrderArray
  }

export default getProductsForOrder
