import { ComponentPropsWithoutRef } from 'react'

import s from './input.module.scss'

export type InputProps = {
  variant?: 'primary' | 'password' | 'search'
  className?: string
} & ComponentPropsWithoutRef<'input'>

export const Input = (
  props: InputProps & Omit<ComponentPropsWithoutRef<'input'>, keyof InputProps>
) => {
  const { variant = 'primary', className, ...rest } = props

  return (
    <div>
      {variant === 'search' && <div>Поиск</div>}
      <input className={`${s[variant]} ${className}`} {...rest} />
      {variant === 'password' && <div>Пароль</div>}
    </div>
  )
}
