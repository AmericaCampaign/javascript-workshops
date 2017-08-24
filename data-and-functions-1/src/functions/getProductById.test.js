/* global describe, expect, it */
import DATA from '../DATA'
import getProductById from './getProductById'

describe('getProductById', () => {
  it('is a function', () => expect(typeof getProductById).toBe('function'))

  it('returns null with null or undefined id', () => expect(getProductById(DATA, null)).toBeNull())

  it('returns null with null or undefined data', () => expect(getProductById(null, 1)).toBeNull())

  it('returns null with null or undefined data.products', () => expect(getProductById({}, 1)).toBeNull())

  it('returns an object when passed a good id', () => expect(typeof getProductById(DATA, 1)).toBe('object'))

  it('returns the correct result', () => {
    expect(getProductById(DATA, 1)).toMatchObject({
      id: 1,
      name: 'Amazing Book',
      price: 30
    })

    expect(getProductById(DATA, 1)).toMatchObject({
      id: 4,
      name: 'Iron Chef Greatest Hits',
      price: 60
    })
  })
})
