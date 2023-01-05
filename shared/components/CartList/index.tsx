import styles from './styles.module.css'
import { ProductCardOnCart } from '@/components'
import { T_Product } from '@/types'

const { container } = styles

export type CartList = {
  cart: T_Product[]
  handleDecrementQuantity: (product: T_Product) => () => void
  handleIncrementQuantity: (product: T_Product) => () => void
}

export function CartList({
  cart,
  handleDecrementQuantity,
  handleIncrementQuantity
}: CartList) {
  return (
    <section className={container}>
      {cart.map((product) => (
        <ProductCardOnCart
          product={product}
          key={product.name}
          onDecrementQuantity={handleDecrementQuantity(product)}
          onIncrementQuantity={handleIncrementQuantity(product)}
        />
      ))}
    </section>
  )
}
