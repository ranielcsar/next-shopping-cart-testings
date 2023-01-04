import { initialShopState, T_ProductOnCart } from '@/contexts'
import { shopReducer } from '@/reducers'
import { ShopActions } from '@/reducers/shop-reducer'
import { cleanup } from '@testing-library/react'

afterEach(cleanup)

const productOnCart: T_ProductOnCart = {
  id: 0,
  name: '',
  price: 0,
  imageUrl: '',
  quantity: 1
}

function addToCartTest() {
  const action = {
    type: ShopActions.ADD_TO_CART,
    payload: productOnCart
  }

  const updatedState = shopReducer(initialShopState, action)

  const expectedUpdatedState = {
    ...initialShopState,
    cart: [productOnCart]
  }

  expect(updatedState).toEqual(expectedUpdatedState)
}

function removeFromCartTest() {
  const state = {
    ...initialShopState,
    cart: [productOnCart]
  }

  const action = {
    type: ShopActions.REMOVE_FROM_CART,
    payload: productOnCart
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
    cart: [productOnCart]
  }

  const action = {
    type: ShopActions.INCREMENT_ITEM_QUANTITY,
    payload: productOnCart
  }

  const updatedState = shopReducer(state, action)

  const expectedUpdatedState = {
    ...initialShopState,
    cart: [
      {
        ...productOnCart,
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
        ...productOnCart,
        quantity: 2
      }
    ]
  }

  const action = {
    type: ShopActions.DECREMENT_ITEM_QUANTITY,
    payload: productOnCart
  }

  const updatedState = shopReducer(state, action)

  const expectedUpdatedState = {
    ...initialShopState,
    cart: [productOnCart]
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
