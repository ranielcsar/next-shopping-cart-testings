import styles from './styles.module.css'
import { Card, Image } from '@/components'
import { T_Product } from '@/types'
import { convertToMonetaryValue } from '@/utils'

export type ProductCardOnCartProps = {
  product: T_Product
  onDecrementQuantity: () => void
  onIncrementQuantity: () => void
}

const {
  container,
  image,
  infos,
  title,
  price_text,
  price,
  action_buttons,
  action_button,
  action_button_label,
  quantity
} = styles

export function ProductCardOnCart({
  product,
  onDecrementQuantity,
  onIncrementQuantity
}: ProductCardOnCartProps) {
  return (
    <Card className={container}>
      <Image
        src={product.imageUrl}
        alt={`Image of ${product.name}`}
        className={image}
        width={100}
        height={100}
      />

      <section className={infos}>
        <h1 className={title}>{product.name}</h1>
        <span className={price_text}>Preço/KG</span>
        <span className={price}>{convertToMonetaryValue(product.price)}</span>
      </section>

      <section className={action_buttons}>
        <button className={action_button} onClick={onDecrementQuantity}>
          <span className={action_button_label}>-</span>
        </button>

        <p className={quantity}>{product.quantity}</p>

        <button className={action_button} onClick={onIncrementQuantity}>
          <span className={action_button_label}>+</span>
        </button>
      </section>
    </Card>
  )
}
