import styles from './styles.module.css'
import CartIcon from '@/assets/shopping-cart.svg'
import { Image } from '@/components'
import { T_Product } from '@/types'
import { convertToMonetaryValue } from '@/utils'

export type ProductCardProps = {
  product: T_Product
}

const {
  container,
  image,
  infos,
  title,
  price_text,
  price,
  add_button,
  add_button_div,
  add_button_label
} = styles

export function ProductCard({ product }: ProductCardProps) {
  const handleOnAddButton = () => console.log(`${product.name} no carrinho`)

  return (
    <div className={container} key={product.id}>
      <picture className={image}>
        <img src={product.imageUrl} alt={`Image of ${product.name}`} />
      </picture>

      <section className={infos}>
        <h1 className={title}>{product.name}</h1>
        <span className={price_text}>Preço/KG</span>
        <span className={price}>{convertToMonetaryValue(product.price)}</span>
      </section>

      <button className={add_button} onClick={handleOnAddButton}>
        <div className={add_button_div}>
          <p className={add_button_label}>Adicionar</p>
          <Image src={CartIcon} alt="cart icon" width={30} />
        </div>
      </button>
    </div>
  )
}
