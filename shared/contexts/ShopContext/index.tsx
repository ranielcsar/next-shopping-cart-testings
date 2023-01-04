import { shopReducer } from '@/reducers'
import { ShopActions } from '@/reducers/shop-reducer'
import { T_Product } from '@/types'
import { createContext, Dispatch, PropsWithChildren, useReducer } from 'react'

export type T_ProductID = T_Product['id']

export type T_ProductOnCart = {
  quantity: number
} & T_Product

export type ShopStateProps = {
  cart: T_ProductOnCart[]
  products: T_Product[]
}

export type ShopActionProps = {
  type: ShopActions
  payload: T_ProductOnCart
}

export type ShopContextProps = {
  state: ShopStateProps
  dispatch: Dispatch<ShopActionProps>
}

const products: T_Product[] = Array.from({ length: 15 }, (_, index: number) => {
  const customIndex = index + 1
  const randomId = Math.floor(Math.random() * 1000)
  const randomPrice = 1000

  return {
    id: index,
    name: `Produto ${customIndex}`,
    price: randomPrice / customIndex,
    imageUrl: `https://picsum.photos/id/${randomId}/600`
  }
})

export const initialShopState = {
  cart: [] as unknown as T_ProductOnCart[],
  products
}

export const ShopContext = createContext({} as ShopContextProps)
const Provider = ShopContext.Provider

export function ShopContextProvider({ children }: PropsWithChildren<unknown>) {
  const [state, dispatch] = useReducer(shopReducer, initialShopState)

  return <Provider value={{ state, dispatch }}>{children}</Provider>
}
