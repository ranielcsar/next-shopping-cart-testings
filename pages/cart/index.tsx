import { ProductList } from '@/components'
import { useShop } from '@/hooks'
import { MainTemplate } from '@/templates'

export default function Cart() {
  const { cart } = useShop()

  return (
    <MainTemplate title="Carrinho">
      <ProductList products={cart} />
    </MainTemplate>
  )
}
