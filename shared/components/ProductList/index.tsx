import styles from './styles.module.css'
import { ProductCard } from '@/components'
import { T_Product } from '@/types'

const { container } = styles

export function ProductList({ products }: { products: T_Product[] }) {
  return (
    <section className={container}>
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </section>
  )
}
