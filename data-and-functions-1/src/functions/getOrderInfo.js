import DATA from '../DATA'
import getUserById from './getUserById'
import getProductById from './getProductById'

const getOrderInfo = (id) => {
  let orderArray = []
  DATA.orders.forEach((o) => {
    orderArray.push({
      userName: getUserById(o.userId).name,
      orderId: o.id,
      price: getProductById(o.productId).price
    })
  })
  return orderArray
}

export default getOrderInfo
