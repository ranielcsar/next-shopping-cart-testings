import { removeFromCart } from './utils'
import { ShopActionProps, ShopStateProps } from '@/contexts'

export enum ShopActions {
  'ADD_TO_CART' = 'ADD_TO_CART',
  'REMOVE_FROM_CART' = 'REMOVE_FROM_CART'
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
    default:
      return state
  }
}
