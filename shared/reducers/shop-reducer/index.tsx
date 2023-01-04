import {
  removeFromCart,
  incrementItemQuantity,
  decrementItemQuantity
} from './utils'
import { ShopActionProps, ShopStateProps } from '@/contexts'

export enum ShopActions {
  'ADD_TO_CART' = 'ADD_TO_CART',
  'REMOVE_FROM_CART' = 'REMOVE_FROM_CART',
  'INCREMENT_ITEM_QUANTITY' = 'INCREMENT_ITEM_QUANTITY',
  'DECREMENT_ITEM_QUANTITY' = 'DECREMENT_ITEM_QUANTITY'
}

export function shopReducer(state: ShopStateProps, action: ShopActionProps) {
  switch (action.type) {
    case ShopActions.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
    case ShopActions.REMOVE_FROM_CART:
      return {
        ...state,
        cart: removeFromCart(state.cart, action.payload.id)
      }
    case ShopActions.INCREMENT_ITEM_QUANTITY:
      return {
        ...state,
        cart: incrementItemQuantity(state.cart, action.payload.id)
      }
    case ShopActions.DECREMENT_ITEM_QUANTITY:
      return {
        ...state,
        cart: decrementItemQuantity(state.cart, action.payload.id)
      }
    default:
      return state
  }
}
