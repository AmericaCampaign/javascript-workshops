import DATA from '../DATA'

const getMostExpensiveProduct = (data) => {
  if (data == null) {
    return null
  }
  let mostExpensiveProduct = 0
  DATA.products.forEach((m) => {
    const currentProduct = data.products[m]
    if (currentProduct.price > mostExpensiveProduct) {
      mostExpensiveProduct = currentProduct
    }
  })
  return mostExpensiveProduct
}

export default getMostExpensiveProduct
