import { Navigate, Outlet, useLocation } from 'react-router-dom'
import useAuth from '../../hooks/use-auth.js'
export function RequireAuth() {
  const { auth } = useAuth()
  const location = useLocation()

  return (
    auth?.user
      ? <Outlet/>
      : <Navigate to='/register' state={{ from: location}} replace/>
  )
}
