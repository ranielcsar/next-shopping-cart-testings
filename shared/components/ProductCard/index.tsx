import styles from './styles.module.css'
import CartIcon from '@/assets/shopping-cart.svg'
import { Card, Image } from '@/components'
import { T_Product } from '@/types'
import { convertToMonetaryValue } from '@/utils'

export type ProductCardProps = {
  product: T_Product
  onAddClick(): void
}

const {
  container,
  image,
  infos,
  title,
  price_text,
  price,
  add_button,
  add_button_label
} = styles

export function ProductCard({ product, onAddClick }: ProductCardProps) {
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

      <button className={add_button} onClick={onAddClick}>
        <span className={add_button_label}>Adicionar</span>
        <Image src={CartIcon} alt="cart icon" width={30} height={30} />
      </button>
    </Card>
  )
}
