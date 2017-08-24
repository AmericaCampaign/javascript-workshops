import DATA from '../DATA'

const addProduct = (dataIn, newProduct) => {
  if(!dataIn || !dataIn.products || !newProduct){
    const err = new Error("Invalid inputs/missing")
    throw err
  }

  if(typeof newProduct !== "object" || !(newProduct.price && newProduct.name) || newProduct.id){
    const err = new Error("Invalid data-type or format.")
    throw err
  }

  newProduct.id = dataIn.products[dataIn.products.length-1].id + 1
  dataIn.products.push(newProduct)
  return newProduct
}

export default addProduct
