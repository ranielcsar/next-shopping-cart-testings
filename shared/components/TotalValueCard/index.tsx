import styles from './styles.module.css'
import { Card } from '@/components'
import { useShop } from '@/hooks'
import { convertToMonetaryValue } from '@/utils'

const { container, text_value } = styles

export function TotalValueCard() {
  const { cart } = useShop()

  const individualProductValues = cart.map(
    (product) => product.price * product.quantity
  )

  const totalValue = individualProductValues.reduce(
    (acc, actual) => acc + actual,
    0
  )

  return (
    <Card className={container}>
      <span>Total:</span>
      <p className={text_value}>{convertToMonetaryValue(totalValue)}</p>
    </Card>
  )
}
