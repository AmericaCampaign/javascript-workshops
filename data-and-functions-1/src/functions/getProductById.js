import DATA from '../DATA'

const getProductById = (id) => {
  let product
  for (let n = 0; n < DATA.products.length; n += 1) {
    if (DATA.products[n].id === id) {
      product = DATA.products[n]
    }
  }
  return product
}

export default getProductById
