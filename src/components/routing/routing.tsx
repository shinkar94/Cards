import { Routes, Route } from 'react-router-dom'

import { SignIn } from '../auth'
import { Typography } from '../ui'

export const Routing = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Typography variant={'body2'}>Hello</Typography>} />
      <Route path={'/sign-in'} element={<SignIn />} />
    </Routes>
  )
}
