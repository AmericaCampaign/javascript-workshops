import DATA from '../DATA'

const getMostExpensiveProduct = (DATA) => {
  if (DATA == null || DATA.products == null) {
    return null
  }
  let mostExpProd // = undefined

  for (let i = 0; i < DATA.products.length; i++) {
    if (mostExpProd === undefined || DATA.products[i].price > mostExpProd.price) {
      mostExpProd = DATA.products[i]
    }
  }

  return mostExpProd
}

export default getMostExpensiveProduct

// passes
