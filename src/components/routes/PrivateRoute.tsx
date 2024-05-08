import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth.hook'
import { REGISTRATION_ROUTE } from '../../utils/const'

const PrivateRoute = () => {
  const { token } = useAuth()
  const location = useLocation()
  return token ? (
    <Outlet />
  ) : (
    <Navigate to={REGISTRATION_ROUTE} state={{ from: location }} />
  )
}
export default React.memo(PrivateRoute)
