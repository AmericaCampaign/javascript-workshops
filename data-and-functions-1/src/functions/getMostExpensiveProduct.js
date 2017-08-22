const getMostExpensiveProduct = (data) => {
  if (data == null || data.products == null) {
    return null
  } else {
    let mostExpensive = data.products[0]
    data.products.forEach((p) => {
      if (mostExpensive.price < p.price) {
        mostExpensive = p
      }
    })
    return mostExpensive
  }
}

export default getMostExpensiveProduct
