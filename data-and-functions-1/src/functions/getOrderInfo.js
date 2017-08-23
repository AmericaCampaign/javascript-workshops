import getUserById from './getUserById'
import getProductById from './getProductById'

const getOrderInfo = (DATA) => {
  if (DATA == null || DATA.orders == null) {
    return null
  } else {
    const orderInfoArr = []
    DATA.orders.forEach((o) => {
      const orderInfo = {
        orderId: o.id,
        userName: getUserById(DATA, o.userId).name,
        price: getProductById(DATA, o.productId).price
      }
      orderInfoArr.push(orderInfo)
    })
    return orderInfoArr
  }
}

export default getOrderInfo
