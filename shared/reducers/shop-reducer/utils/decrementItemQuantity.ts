import { ShopStateProps, T_ProductID } from '@/contexts'

export function decrementItemQuantity(
  cart: ShopStateProps['cart'],
  id: T_ProductID
) {
  const cartCopy = cart.slice()

  const newCart = cartCopy.map((product) => {
    if (product.id === id) {
      const newQuantity = product.quantity - 1

      return {
        ...product,
        quantity: newQuantity
      }
    }

    return product
  })

  return newCart
}
