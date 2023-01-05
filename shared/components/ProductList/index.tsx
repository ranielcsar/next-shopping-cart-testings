import styles from './styles.module.css'
import { ProductCard } from '@/components'
import { T_Product } from '@/types'

const { container } = styles

export type ProductListProps = {
  products: T_Product[]
  handleOnAddToCart: (product: T_Product) => () => void
}

export function ProductList({ products, handleOnAddToCart }: ProductListProps) {
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
