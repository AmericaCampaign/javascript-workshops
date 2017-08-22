import DATA from '../DATA'

const getProductByID = (DATA, id) => {
  if (DATA == null || DATA.products == null || id == null) {
    return null
  }
  let productFound

  for (let i = 0; i < DATA.products.length; i++) {
    const currentProduct = DATA.products[i]

    if (currentProduct.id === id) {
      productFound = currentProduct
    }
  }
  return productFound
}

export default getProductByID

//passes
