import getUserById from './getUserById'
import getProductById from './getProductById'

const getOrderInfo = (DATA) => {
  if (DATA == null || DATA.orders == null) {
    return null
  }
  const orderArray = []
  DATA.orders.forEach((o) => {
    const currentOrder = DATA.orders[o]
    const userName = getUserById(DATA, currentOrder.userId).name
    const orderId = currentOrder.id
    const price = getProductById(DATA, currentOrder.productId).price
    const orderInfo = {
      orderId: orderId,
      userName: userName,
      price: price
    }
    orderArray.push(orderInfo)
  })
  return orderArray
}

export default getOrderInfo
