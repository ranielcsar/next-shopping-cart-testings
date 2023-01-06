import { ShopStateProps, T_ProductID } from '@/types'

export function decrementItemQuantity(
  cart: ShopStateProps['cart'],
  id: T_ProductID
) {
  const cartCopy = cart.slice()

  const newCart = cartCopy.map((product) => {
    if (product.id === id) {
      let newQuantity = product.quantity - 1

      if (newQuantity <= 0) newQuantity = 0

      return {
        ...product,
        quantity: newQuantity
      }
    }

    return product
  })

  return newCart
}
