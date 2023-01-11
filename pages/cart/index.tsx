import { CartList, TotalValueCard } from '@/components'
import { useShop } from '@/hooks'
import { MainTemplate } from '@/templates'

export default function Cart() {
  const { cart } = useShop()

  return (
    <MainTemplate title="Carrinho">
      <CartList cart={cart} />

      <TotalValueCard />
    </MainTemplate>
  )
}
