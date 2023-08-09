import { Outlet } from 'react-router-dom'

import { Header } from './components/ui'
import { useMeQuery } from './services/auth'

export function App() {
  const { data } = useMeQuery()

  return (
    <>
      <Header data={data} />
      <Outlet />
    </>
  )
}
