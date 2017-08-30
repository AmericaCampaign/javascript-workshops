import DATA from '../DATA'

const getProductsForOrder = (DATA, id) => {
  if (DATA == null || DATA.products == null || id == null) {
    throw new Error(('something is a little hairy here in getProductsForOrder...'))
  }

  let foundOrder

  for (let i = 0; i < DATA.orders.length; i++) {
    const currentOrder = DATA.orders[i]

    if (currentOrder.id === id) {
      foundOrder = currentOrder
    }
  }
  if (!foundOrder) {
    return null
  }

  const currentProductId = foundOrder.id
  const productsArray = []

  const getOrderById = (DATA, id) => {
    for (let j = 0; j < DATA.products.length; j++) {
      const currentProduct = DATA.products[j]
      if (currentProduct.id === currentProductId) {
      }
      return currentProduct
    }
  }

  for (let i = 0; i < foundOrder.products.length; i++) {
    let fetchedOrderId = getOrderById(DATA, id)
    productsArray.push(fetchedOrderId)
  }
  return productsArray
}

export default getProductsForOrder

// passes
