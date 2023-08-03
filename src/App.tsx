import { Header } from './components/ui'
import { Routing } from './components/routing/routing.tsx'

export function App() {
  return (
    <>
      <Header isAuth={false} />
      <Routing />
    </>
  )
}
