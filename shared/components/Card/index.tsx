import { HTMLAttributes, PropsWithChildren } from 'react'

export function Card({
  children,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  const style = {
    borderRadius: '8px',
    color: '#1D222B',
    boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.1)'
  }

  return (
    <div {...props} style={style}>
      {children}
    </div>
  )
}
