import { ShopActionProps, ShopStateProps } from '@/contexts'

export enum ShopActions {
  'ADD_TO_CART' = 'ADD_TO_CART'
}

export function shopReducer(state: ShopStateProps, action: ShopActionProps) {
  switch (action.type) {
    case ShopActions.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
    default:
      return state
  }
}
