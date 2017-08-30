import getProductsForOrder from './getProductsForOrder'

const getTotalPriceForOrder = (DATA, orderId) => {
  if (DATA == null || DATA.products == null || DATA.id == null) {
    throw new Error(('DATA, products, or id is null'))
  }

  for (let i = 0; i < DATA.orders.length; i++) {
    const currentOrder = DATA.orders[i]
    const totalPrice = getProductsForOrder(DATA, currentOrder.orderId).price

    if (currentOrder.orderId === orderId) {
      return totalPrice
    }
    if (!currentOrder.orderId) {
      return null
    }
  }
}

export default getTotalPriceForOrder
