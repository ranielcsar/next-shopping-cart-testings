import styles from './styles.module.css'
import logo from '@/assets/logo.svg'
import { Image } from '@/components'
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
    path: '/cart',
    label: 'Carrinho'
  }
]

const {
  main_container,
  container,
  shopping_logo,
  menu,
  menu_items,
  menu_item
} = styles

export function Header() {
  const router = useRouter()

  const handleGoToPath = (path: string) => () => {
    router.push(path)
  }

  return (
    <header className={main_container}>
      <section className={container}>
        <div className={shopping_logo}>
          <Image src={logo} alt="Shopping Cart Basket Logo" />
        </div>

        <nav className={menu}>
          <ul className={menu_items}>
            {menuItems.map((item) => (
              <li className={menu_item} key={item.label}>
                <button onClick={handleGoToPath(item.path)}>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </header>
  )
}
