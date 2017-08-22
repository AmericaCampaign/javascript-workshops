import DATA from '../DATA'

const getOrderInfo = () => {
  let orderInfoArr = []
  // let userName
  // let price
  const orderInfo = {
    orderId: orderId,
    userName: userName,
    price: price
  }
  DATA.orders.forEach((order) => {
    if (order.id && order.userId && order.productId > 0) {
      let orderId =  order.id
      let userName = getUserByID(order.userId).name
      let price = getProductByID(order.productId).price
    }
    orderInfoArr.push(orderInfo)
  })

  return orderInfoArr
}

export default getOrderInfo
