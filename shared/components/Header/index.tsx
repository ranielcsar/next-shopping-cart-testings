import styles from './styles.module.css'
import logo from '@/assets/logo.svg'
import CartIcon from '@/assets/shopping-cart.svg'
import { Image } from '@/components'
import { useShop } from '@/hooks'
import { useRouter } from 'next/router'

type MenuItemProps = {
  path: string
  label: string
}

const menuItems: MenuItemProps[] = [
  {
    path: '/',
    label: 'Home'
  },
  {
    path: '/about',
    label: 'Sobre'
  }
]

const {
  main_container,
  container,
  shopping_logo,
  menu,
  menu_items,
  menu_item,
  cart_badge
} = styles

export function Header() {
  const router = useRouter()
  const { cart } = useShop()
  const cartLength = cart.length

  const handleGoToPath = (path: string) => () => {
    router.push(path)
  }

  return (
    <header className={main_container}>
      <section className={container}>
        <Image
          src={logo}
          alt="Shopping Cart Basket Logo"
          className={shopping_logo}
        />

        <nav className={menu}>
          <ul className={menu_items}>
            {menuItems.map((item) => (
              <li className={menu_item} key={item.label}>
                <button onClick={handleGoToPath(item.path)}>
                  {item.label}
                </button>
              </li>
            ))}

            <button onClick={handleGoToPath('/cart')}>
              <div className={menu_item} style={{ position: 'relative' }}>
                <Image src={CartIcon} alt="cart icon" width={40} height={40} />
                <div className={cart_badge}>{cartLength}</div>
              </div>
            </button>
          </ul>
        </nav>
      </section>
    </header>
  )
}
