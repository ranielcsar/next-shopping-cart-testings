import { ShopStateProps, T_ProductID } from '@/types'

export function removeFromCart(cart: ShopStateProps['cart'], id: T_ProductID) {
  const cartCopy = cart.slice()

  const newCart = cartCopy.filter((product) => product.id !== id)

  return newCart
}
