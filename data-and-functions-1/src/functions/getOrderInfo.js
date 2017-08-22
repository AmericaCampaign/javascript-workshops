import getUserById from './getUserById'
import getProductById from './getProductById'

const getOrderInfo = (DATA, id) => {
  if (DATA == null || DATA.orders == null || id == null) {
    return null
  }
  const orderInfoArr = []
  DATA.orders.forEach((o) => {
    const orderInfo = {
      orderId: o.id,
      userName: getUserById(o.userName),
      price: getProductById(o.productId).name
    }
    orderInfoArr.push(orderInfo)
  })
  return orderInfoArr
}

export default getOrderInfo
