import { ProductList } from '@/components'
import { useShop } from '@/hooks'
import { MainTemplate } from '@/templates'

export default function Cart() {
  const { state } = useShop()

  const { cart } = state

  console.log({ cart })

  return (
    <MainTemplate title="Carrinho">
      <ProductList products={cart} />
    </MainTemplate>
  )
}
