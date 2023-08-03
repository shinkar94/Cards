import { Routes, Route } from 'react-router-dom'

import { SignIn, CheckEmail } from '../auth'
import { Typography } from '../ui'

export const Routing = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Typography variant={'body2'}>Hello</Typography>} />
      <Route path={'/sign-in'} element={<SignIn />} />
      <Route path={'/check-email'} element={<CheckEmail email={'egorbelozerov@mail.ru'} />} />
    </Routes>
  )
}
