import {
  removeFromCart,
  incrementItemQuantity,
  decrementItemQuantity,
  addItemToCart
} from './utils'
import { ShopActionProps, ShopStateProps } from '@/types'

export enum ShopActions {
  'ADD_TO_CART' = 'ADD_TO_CART',
  'REMOVE_FROM_CART' = 'REMOVE_FROM_CART',
  'INCREMENT_ITEM_QUANTITY' = 'INCREMENT_ITEM_QUANTITY',
  'DECREMENT_ITEM_QUANTITY' = 'DECREMENT_ITEM_QUANTITY'
}

export function shopReducer(
  state: ShopStateProps,
  { type, payload }: ShopActionProps
): ShopStateProps {
  const { cart } = state
  const product = payload

  const {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    INCREMENT_ITEM_QUANTITY,
    DECREMENT_ITEM_QUANTITY
  } = ShopActions

  switch (type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: addItemToCart(cart, product)
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: removeFromCart(cart, product.id)
      }
    case INCREMENT_ITEM_QUANTITY:
      return {
        ...state,
        cart: incrementItemQuantity(cart, product.id)
      }
    case DECREMENT_ITEM_QUANTITY:
      return {
        ...state,
        cart: decrementItemQuantity(cart, product.id)
      }
    default:
      return state
  }
}
