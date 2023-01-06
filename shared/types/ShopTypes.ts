import { T_Product } from '.'
import { ShopActions } from '@/reducers'
import { Dispatch } from 'react'

export type T_ProductID = T_Product['id']

export type ShopStateProps = {
  cart: T_Product[]
  products: T_Product[]
}

export type ShopActionProps = {
  type: ShopActions
  payload: T_Product
}

export type ShopContextProps = {
  state: ShopStateProps
  dispatch: Dispatch<ShopActionProps>
}
