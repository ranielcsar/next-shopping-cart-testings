import { initialShopState } from '@/contexts'
import { shopReducer } from '@/reducers'
import { ShopActions } from '@/reducers/shop-reducer'
import { T_Product } from '@/types'

const product: T_Product = {
  id: 0,
  name: '',
  price: 0,
  imageUrl: ''
}

function addToCartTest() {
  const payload = {
    ...product,
    quantity: 1
  }

  const action = {
    type: ShopActions.ADD_TO_CART,
    payload
  }

  const updatedState = shopReducer(initialShopState, action)

  expect(updatedState).toEqual({
    ...initialShopState,
    cart: [payload]
  })
}

function removeFromCartTest() {
  const payload = {
    ...product,
    quantity: 1
  }

  const state = {
    ...initialShopState,
    cart: [payload]
  }

  const action = {
    type: ShopActions.REMOVE_FROM_CART,
    payload
  }

  const updatedState = shopReducer(state, action)

  expect(updatedState).toEqual({
    ...initialShopState,
    cart: []
  })
}

describe('Shop reducer', () => {
  it('should update cart in state when add to cart', addToCartTest)

  it('should update cart in state when remove from cart', removeFromCartTest)
})
