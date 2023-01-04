import { ShopContext } from '@/contexts'
import { useContext } from 'react'

export function useShop() {
  const { state, dispatch } = useContext(ShopContext)

  return { ...state, dispatch }
}
