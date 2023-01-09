import {
  removeFromCart,
  incrementItemQuantity,
  decrementItemQuantity
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
  switch (type) {
    case ShopActions.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, payload]
      }
    case ShopActions.REMOVE_FROM_CART:
      return {
        ...state,
        cart: removeFromCart(state.cart, payload.id)
      }
    case ShopActions.INCREMENT_ITEM_QUANTITY:
      return {
        ...state,
        cart: incrementItemQuantity(state.cart, payload.id)
      }
    case ShopActions.DECREMENT_ITEM_QUANTITY:
      return {
        ...state,
        cart: decrementItemQuantity(state.cart, payload.id)
      }
    default:
      return state
  }
}
