import styles from './styles.module.css'
import { PropsWithChildren, useEffect } from 'react'

export type PageHeadTemplateProps = {
  title: string
}

export function MainTemplate({
  title,
  children
}: PropsWithChildren<PageHeadTemplateProps>) {
  useEffect(() => {
    if (document) {
      document.title = `ShoppingCart - ${title}`
    }
  }, [])

  return <main className={styles.main_container}>{children}</main>
}
