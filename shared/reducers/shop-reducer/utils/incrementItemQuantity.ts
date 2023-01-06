import { ShopStateProps, T_ProductID } from '@/types'

export function incrementItemQuantity(
  cart: ShopStateProps['cart'],
  id: T_ProductID
) {
  const cartCopy = cart.slice()

  const newCart = cartCopy.map((product) => {
    if (product.id === id) {
      return {
        ...product,
        quantity: product.quantity + 1
      }
    }

    return product
  })

  return newCart
}
