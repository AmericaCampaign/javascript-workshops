
const getMostExpensiveProduct = (DATA) => {
  if (DATA == null || DATA.products == null) {
    return null
  }

  let mostExpensive

  DATA.products.forEach((p) => {
    if (mostExpensive === null || mostExpensive.price < p.price) {
      mostExpensive = p
    }
  })
  return mostExpensive
}

export default getMostExpensiveProduct
