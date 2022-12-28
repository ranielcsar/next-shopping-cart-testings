import { ProductList } from '@/components'
import { T_Product } from '@/types'

export function HomePageTemplate() {
  return (
    <>
      <ProductList products={products} />
    </>
  )
}

const products: T_Product[] = Array.from({ length: 15 }, (_, index: number) => {
  const customIndex = index + 1
  const randomId = Math.floor(Math.random() * 1000)
  const randomPrice = 1000

  return {
    id: index,
    name: `Produto ${customIndex}`,
    price: randomPrice / customIndex,
    imageUrl: `https://picsum.photos/id/${randomId}/600`
  }
})
