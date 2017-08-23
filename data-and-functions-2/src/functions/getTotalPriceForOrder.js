import DATA from '../DATA'
import getProductsForOrder from './getProductsForOrder'

const getTotalPriceForOrder = (DATA, orderId) => {
  if (DATA == null || DATA.products == null || DATA.id == null) {
    throw new Error(('DATA, products, or id is null'))
  }
  let orderProductsId

  for (let i = 0; i < DATA.orders.length; i++) {
    const currentOrder = DATA.orders[i]

    if (currentOrder.id === id) {
      orderProductsId = currentOrder
    }
  }
  if (!orderProductsId) {
    return null
  }
// getProductsForOrder(DATA, orderId)
}

export default getTotalPriceForOrder
