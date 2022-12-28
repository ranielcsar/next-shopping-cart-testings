import { shopReducer } from '@/reducers'
import { ActionsEnum } from '@/reducers/shop-reducer'
import { T_Product } from '@/types'
import { createContext, Dispatch, PropsWithChildren, useReducer } from 'react'

type T_ProductOnCart = {
  quantity: number
} & T_Product

export type ShopStateProps = {
  cart: T_ProductOnCart[]
}

export type ShopActionProps = {
  type: ActionsEnum
  payload: T_ProductOnCart
}

export type ShopContextProps = {
  state: ShopStateProps
  dispatch: Dispatch<ShopActionProps>
}

const initialState = {
  cart: [] as unknown as T_ProductOnCart[]
}

export const ShopContext = createContext({} as ShopContextProps)
const Provider = ShopContext.Provider

export function ShopContextProvider({ children }: PropsWithChildren<any>) {
  const [state, dispatch] = useReducer(shopReducer, initialState)

  return <Provider value={{ state, dispatch }}>{children}</Provider>
}
