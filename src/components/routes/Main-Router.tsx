import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { authRoutes, routes } from './constants'
import PrivateRoute from './PrivateRoute'

const MainRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<PrivateRoute />}>
          {authRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Route>
        {routes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </Suspense>
  )
}

export default React.memo(MainRouter)
