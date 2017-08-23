import getProductById from './getProductById'

const getProductsForOrder = (data, id) => {
  if (data == null || id == null || data.orders == null) {
    throw new Error('Do not have data or ID')
  }
  const order = data.orders.find((o) => o.id === id)
  if (order === undefined) {
    return null
  }
  const productArray = []
  order.products.forEach((p) => {
    productArray.push(getProductById(data, p))
  })
  return productArray
}

export default getProductsForOrder
