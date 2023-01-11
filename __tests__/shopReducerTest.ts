import { initialShopState } from '@/contexts'
import { shopReducer, ShopActions } from '@/reducers'
import { T_Product } from '@/types'
import { cleanup } from '@testing-library/react'

afterEach(cleanup)

const product: T_Product = {
  id: 0,
  name: '',
  price: 0,
  imageUrl: '',
  quantity: 1
}

function addToCartTest() {
  const action = {
    type: ShopActions.ADD_TO_CART,
    payload: product
  }

  const updatedState = shopReducer(initialShopState, action)

  const expectedUpdatedState = {
    ...initialShopState,
    cart: [product]
  }

  expect(updatedState).toEqual(expectedUpdatedState)
}

function removeFromCartTest() {
  const state = {
    ...initialShopState,
    cart: [product]
  }

  const action = {
    type: ShopActions.REMOVE_FROM_CART,
    payload: product
  }

  const updatedState = shopReducer(state, action)

  const expectedUpdatedState = {
    ...initialShopState,
    cart: []
  }

  expect(updatedState).toEqual(expectedUpdatedState)
}

function incrementItemQuantityTest() {
  const state = {
    ...initialShopState,
    cart: [product]
  }

  const action = {
    type: ShopActions.INCREMENT_ITEM_QUANTITY,
    payload: product
  }

  const updatedState = shopReducer(state, action)

  const expectedUpdatedState = {
    ...initialShopState,
    cart: [
      {
        ...product,
        quantity: 2
      }
    ]
  }

  expect(updatedState).toEqual(expectedUpdatedState)
}

function decrementItemQuantityTest() {
  const state = {
    ...initialShopState,
    cart: [
      {
        ...product,
        quantity: 2
      }
    ]
  }

  const action = {
    type: ShopActions.DECREMENT_ITEM_QUANTITY,
    payload: product
  }

  const updatedState = shopReducer(state, action)

  const expectedUpdatedState = {
    ...initialShopState,
    cart: [product]
  }

  expect(updatedState).toEqual(expectedUpdatedState)
}

describe('Shop reducer', () => {
  it('should update cart in state when add to cart', addToCartTest)

  it('should update cart in state when remove from cart', removeFromCartTest)

  it(
    'should increment a specific item quantity in cart',
    incrementItemQuantityTest
  )

  it(
    'should decrement a specific item quantity in cart',
    decrementItemQuantityTest
  )
})
