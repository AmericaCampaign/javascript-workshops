
const addOrder = (DATA, order) => {
  if (!DATA || !DATA.orders || !order || typeof order !== 'object' || order.id === true) {
    throw new Error('Error')
  }
  const getNewId = DATA.orders.id.length + 1

  const newOrder = { id: getNewId, userId: 1, products: 1 }

  DATA.orders.push(newOrder)

  return newOrder
}

export default addOrder
