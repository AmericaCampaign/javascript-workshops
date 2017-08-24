import DATA from '../DATA.js'

const getProductById = (dataIn, id) => {
  if(!dataIn || !id || !dataIn.products){
    return null
  }
  return dataIn.products.find((product) => product.id === id)
}

export default getProductById
