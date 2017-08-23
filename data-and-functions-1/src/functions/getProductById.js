const getProductById = (DATA, id) => {
  if (DATA == null || DATA.users == null || id == null) {
    return null
  }
  let product
  DATA.products.forEach((p) => {
    if (p.id === id) {
      product = p
    }
  })
  return product
}

export default getProductById
