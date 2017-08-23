import DATA from '../DATA.js'

const getMostExpensiveProduct = (dataIn) => {
  if(!dataIn || !dataIn.products){
    return null
  }
  return dataIn.products.reduce((maxVal, product) => (product.price > maxVal.price) ? product : maxVal ,dataIn.products[0])
}

export default getMostExpensiveProduct
