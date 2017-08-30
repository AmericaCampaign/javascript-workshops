
const addProduct = (DATA, product) => {
  if (!DATA || !DATA.products || !product || typeof product !== 'object' ) {
    throw new Error('Error')
  }

  if (product.id === true) {
    throw new Error('error')
  }
}

export default addProduct
