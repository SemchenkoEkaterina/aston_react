import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { authRoutes, routes } from './constants'
import PrivateRoute from './PrivateRoute'

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<PrivateRoute />}>
            {authRoutes.map((route) => {
              const Component = () => route.component
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<Component />}
                />
              )
            })}
          </Route>
          {routes.map((route) => {
            const Component = () => route.component
            return (
              <Route
                key={route.path}
                path={route.path}
                element={<Component />}
              />
            )
          })}
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default React.memo(MainRouter)
