import styles from './styles.module.css'
import { ProductCard } from '@/components'
import { useShop } from '@/hooks'
import { ShopActions } from '@/reducers'
import { T_Product } from '@/types'

const { container } = styles

export type ProductListProps = {
  products: T_Product[]
}

export function ProductList({ products }: ProductListProps) {
  const { dispatch } = useShop()

  const handleOnAddToCart = (product: T_Product) => () => {
    dispatch({
      type: ShopActions.ADD_TO_CART,
      payload: product
    })
  }

  return (
    <section className={container}>
      {products.map((product) => (
        <ProductCard
          product={product}
          key={product.name}
          onAddClick={handleOnAddToCart(product)}
        />
      ))}
    </section>
  )
}
