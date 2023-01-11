import { ShopStateProps, T_Product } from '@/types'

export function addItemToCart(
  cart: ShopStateProps['cart'],
  newProduct: T_Product
) {
  const cartCopy = cart.slice()
  const productAlreadyInCart = cartCopy.find(
    (product) => product.id === newProduct.id
  )

  if (!productAlreadyInCart) {
    cartCopy.push(newProduct)
  }

  const newCart = cartCopy.map((product) => {
    if (product.id === newProduct.id) {
      return {
        ...product,
        quantity: product.quantity + 1
      }
    }

    return product
  })

  return newCart
}
