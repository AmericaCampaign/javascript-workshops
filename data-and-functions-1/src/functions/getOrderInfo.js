import DATA from '../DATA.js'

const getOrderInfo = (dataIn) => {
  if(!dataIn || !dataIn.orders){
    return null
  }
  return dataIn.orders.map((order) => {
    const orderInfo = {}
    dataIn.users.forEach((user) => {
      if(user.id === order.userId){
        orderInfo.userName = user.name
        orderInfo.orderId = order.id
      }
    })

    dataIn.products.forEach((product) => {
      if(product.id === order.productId){
        orderInfo.price = product.price
      }
    })
    
    return orderInfo
  })
}

export default getOrderInfo
