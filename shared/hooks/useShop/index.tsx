import { ShopContext } from '@/contexts'
import { useContext } from 'react'

export function useShop() {
  const shop = useContext(ShopContext)

  return shop
}
