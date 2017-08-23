const getMostExpensiveProduct = (data) => {
  if (data == null || data.products == null) {
    return null
  } else {
    let mostExpensiveProduct = data.products[0]
    data.products.forEach((p) => {
      if (p.price > mostExpensiveProduct.price) {
        mostExpensiveProduct = p
      }
    })
    return mostExpensiveProduct
  }
}

export default getMostExpensiveProduct
