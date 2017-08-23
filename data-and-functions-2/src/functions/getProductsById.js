const getProductsById = (DATA, id) => {
  if (DATA == null || DATA.products == null || id == null) {
    return null
  } else {
    let product
    DATA.products.forEach((p) => {
      if (p.id === id) {
        product = p
      }
    })
    return product
  }
}

export default getProductsById
