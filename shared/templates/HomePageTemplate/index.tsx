import { ProductList } from '@/components'
import { useShop } from '@/hooks'
import { ShopActions } from '@/reducers'
import { T_Product } from '@/types'

export function HomePageTemplate() {
  const { products, dispatch } = useShop()

  const handleOnAddToCart = (product: T_Product) => () => {
    dispatch({
      type: ShopActions.ADD_TO_CART,
      payload: { ...product, quantity: 1 }
    })
  }

  return (
    <ProductList products={products} handleOnAddToCart={handleOnAddToCart} />
  )
}
