// import { Button } from '../button'

import s from './header.module.scss'
// import logo from '../../../assets/svg/logo.svg'
import { Logo } from '../../../assets/svg/logo.tsx'
import { Typography } from '../typography'
import { Avatar } from '../../../assets/svg'

export const Header = () => {
  return (
    <div className={s.headerBlock}>
      <Logo />
      {/*<Button variant={'primary'}>Sign In</Button>*/}
      <div className={s.avatar_menu}>
        <Typography variant={'subtitle1'} className={s.menu_name}>
          Name
        </Typography>
        <Avatar />
      </div>
    </div>
  )
}
