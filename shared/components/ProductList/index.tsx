import styles from './styles.module.css'
import { ProductCard } from '@/components'
import { useShop } from '@/hooks'
import { ActionsEnum } from '@/reducers/shop-reducer'
import { T_Product } from '@/types'

const { container } = styles

export function ProductList({ products }: { products: T_Product[] }) {
  const { dispatch } = useShop()

  const handleOnAddToCart = (product: T_Product) => {
    dispatch({ type: ActionsEnum.ADD, payload: { ...product, quantity: 1 } })
  }

  return (
    <section className={container}>
      {products.map((product) => (
        <ProductCard
          product={product}
          key={product.name}
          onAddClick={() => handleOnAddToCart(product)}
        />
      ))}
    </section>
  )
}
