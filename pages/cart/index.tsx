import { CartList } from '@/components'
import { useShop } from '@/hooks'
import { ShopActions } from '@/reducers'
import { MainTemplate } from '@/templates'
import { T_Product } from '@/types'

export default function Cart() {
  const { cart, dispatch } = useShop()

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

  return (
    <MainTemplate title="Carrinho">
      <CartList
        cart={cart}
        handleDecrementQuantity={handleDecrementQuantity}
        handleIncrementQuantity={handleIncrementQuantity}
      />
    </MainTemplate>
  )
}
