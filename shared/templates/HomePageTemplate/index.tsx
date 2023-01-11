import { ProductList } from '@/components'
import { useShop } from '@/hooks'

export function HomePageTemplate() {
  const { products } = useShop()

  return <ProductList products={products} />
}
