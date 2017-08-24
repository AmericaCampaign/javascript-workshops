import getUserById from './getUserById'
import getProductById from './getProductById'

const getOrderInfo = (data) => {
  if (data == null || data.orders == null) {
    return null
  } else {
    const orders = []
    data.orders.forEach((o) => {
      orders.push({
        orderId: o.id,
        price: getProductById(data, o.productId).price,
        userName: getUserById(data, o.userId).name
      })
    })
    return orders
  }
}

export default getOrderInfo
