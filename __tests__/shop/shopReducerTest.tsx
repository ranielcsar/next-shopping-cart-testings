import { initialShopState } from '@/contexts'
import { shopReducer } from '@/reducers'
import { ShopActions } from '@/reducers/shop-reducer'
import { T_Product } from '@/types'

function addToCartTest() {
  const product: T_Product = {
    id: 0,
    name: '',
    price: 0,
    imageUrl: ''
  }

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

describe('Shop reducer', () => {
  it('should update cart on state when add to cart', addToCartTest)
})
