import DATA from '../DATA'

const getMostExpensiveProduct = () => {
  let mostExpProd // = undefined

  for (let i = 0; i < DATA.products.length; i++) {
    if (mostExpProd === undefined || DATA.products[i].price > mostExpProd.price) {
      mostExpProd = DATA.products[i]
    }
  }

  return mostExpProd
}

export default getMostExpensiveProduct
