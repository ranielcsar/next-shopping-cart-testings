import styles from './styles.module.css'
import { ProductCardOnCart } from '@/components'
import { useShop } from '@/hooks'
import { ShopActions } from '@/reducers'
import { T_Product } from '@/types'

const { container } = styles

export type CartList = {
  cart: T_Product[]
}

export function CartList({ cart }: CartList) {
  const { dispatch } = useShop()

  const handleIncrementQuantity = (product: T_Product) => () => {
    dispatch({
      type: ShopActions.INCREMENT_ITEM_QUANTITY,
      payload: product
    })
  }

  const handleDecrementQuantity = (product: T_Product) => () => {
    dispatch({
      type: ShopActions.DECREMENT_ITEM_QUANTITY,
      payload: product
    })
  }

  const handleRemoveFromCart = (product: T_Product) => () => {
    dispatch({
      type: ShopActions.REMOVE_FROM_CART,
      payload: product
    })
  }

  return (
    <section className={container}>
      {cart.map((product) => (
        <ProductCardOnCart
          key={product.name}
          product={product}
          onDecrementQuantity={handleDecrementQuantity(product)}
          onIncrementQuantity={handleIncrementQuantity(product)}
          onRemoveFromCart={handleRemoveFromCart(product)}
        />
      ))}
    </section>
  )
}
