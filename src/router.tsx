import { createBrowserRouter, Navigate, Outlet, RouteObject } from 'react-router-dom'

import { App } from './App.tsx'
import { PacksList } from './components/page'
import { EmptyPack } from './components/page/emty-pack'
import { FriendsPack } from './components/page/friends-pack'
import { Login } from './components/page/login/login.tsx'
import { MyPack } from './components/page/my-pack'
import { useMeQuery } from './services/auth'

const publicRoutes: RouteObject[] = [
  {
    path: '/login',
    element: <Login />,
  },
]

const privateRoutes: RouteObject[] = [
  {
    path: '/',
    element: <PacksList />,
  },
  {
    path: '/my-pack/:id',
    element: <MyPack />,
  },
  {
    path: '/friends-pack/:id',
    element: <FriendsPack />,
  },
  {
    path: '/empty-pack/:name/:id',
    element: <EmptyPack />,
  },
]

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        element: <PrivateRoutes />,
        children: privateRoutes,
      },
      ...publicRoutes,
    ],
  },
])

function PrivateRoutes() {
  const { data, isLoading } = useMeQuery()

  if (isLoading) return <div>...Loading</div>

  return data ? <Outlet /> : <Navigate to="/login" />
}
