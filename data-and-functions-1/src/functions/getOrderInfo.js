import DATA from '../DATA'
import getProductById from './getProductById'
import getUserById from './getUserById'

const getOrderInfo = (DATA, orderId) => {
  if (DATA == null || DATA.users == null || orderId == null) {
    return null
  }
  let orderInfoArr = []

  for (let i = 0; i < DATA.orders.length; i++) {
    if (DATA.orders.id && DATA.orders.userId && DATA.orders.productId > 0) {
      let orderId = DATA.orders.id
      let userName = getUserById(DATA.orders.userId).name
      let price = getProductById(DATA.order.productId).price
      let orderInfo = {
        orderId: orderId,
        userName: userName,
        price: price
      }
      orderInfoArr.push(orderInfo)
    }

  }

  return orderInfoArr
}

export default getOrderInfo
