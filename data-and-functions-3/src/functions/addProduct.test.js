/* globals describe, expect, it */
import {cloneDeep, isPlainObject} from 'lodash'
import DATA from '../DATA'
import addProduct from './addProduct'

const sampleProduct = {
  name: 'Sample Product',
  price: 100
}

describe('addProduct', () => {
  it(
    'is a function',
    () =>
      expect(typeof addProduct).toBe('function')
  )

  it(
    'throws if data is missing',
    () =>
      expect(() => addProduct(undefined, sampleProduct)).toThrow(Error)
  )

  it(
    'throws if data.products is missing',
    () =>
      expect(() => addProduct({}, sampleProduct)).toThrow(Error)
  )

  it(
    'throws if the new product is missing',
    () =>
      expect(() => addProduct(DATA, undefined)).toThrow(Error)
  )

  it(
    'throws if the new product is not an object',
    () =>
      expect(() => addProduct(DATA, 'Not an object')).toThrow(Error)
  )

  it(
    'throws if the new product is an object with the wrong structure',
    () =>
      expect(() => addProduct(DATA, {foo: 'bar'})).toThrow(Error)
  )

  it(
    'throws if the new product has an id property',
    () => {
      const data = cloneDeep(DATA)
      expect(() => addProduct(data, {id: 10, name: 'New Product', price: 100})).toThrow(Error)
    }
  )

  it(
    'returns an object',
    () => {
      const data = cloneDeep(DATA)
      const newProduct = {name: 'New Product', price: 100}
      const returnValue = addProduct(data, newProduct)
      expect(isPlainObject(returnValue)).toBe(true)
    }
  )

  it(
    'returns an object with the correct properties (id, name price)',
    () => {
      const data = cloneDeep(DATA)
      const newProduct = {name: 'New Product', price: 100}
      const returnValue = addProduct(data, newProduct)
      expect(returnValue).toEqual(expect.objectContaining({
        id: expect.any(Number),
        name: 'New Product',
        price: 100
      }))
    }
  )

  it(
    'mutates the data.products array correctly',
    () => {
      const data = cloneDeep(DATA)
      const newProduct = {name: 'New Product', price: 100}
      const returnValue = addProduct(data, newProduct)
      expect(data.products).toContainEqual(returnValue)
    }
  )
})
