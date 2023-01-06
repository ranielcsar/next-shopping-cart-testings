import { shopReducer } from '@/reducers'
import { ShopContextProps, ShopStateProps, T_Product } from '@/types'
import { createContext, PropsWithChildren, useReducer } from 'react'

const products: T_Product[] = Array.from({ length: 15 }, (_, index: number) => {
  const customIndex = index + 1
  const randomId = Math.floor(Math.random() * 1000)
  const randomPrice = 1000

  return {
    id: index,
    name: `Produto ${customIndex}`,
    price: randomPrice / customIndex,
    imageUrl: `https://picsum.photos/id/${randomId}/600`,
    quantity: 0
  }
})

export const initialShopState: ShopStateProps = {
  cart: [] as T_Product[],
  products
}

export const ShopContext = createContext({} as ShopContextProps)
const Provider = ShopContext.Provider

export function ShopContextProvider({ children }: PropsWithChildren<unknown>) {
  const [state, dispatch] = useReducer(shopReducer, initialShopState)

  return <Provider value={{ state, dispatch }}>{children}</Provider>
}
