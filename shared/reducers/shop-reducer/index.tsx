import { ShopActionProps, ShopStateProps } from '@/contexts'

export enum ActionsEnum {
  'ADD' = 'ADD'
}

export function shopReducer(state: ShopStateProps, action: ShopActionProps) {
  switch (action.type) {
    case ActionsEnum.ADD:
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
    default:
      return state
  }
}
