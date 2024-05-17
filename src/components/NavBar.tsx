import React, { useEffect, ReactElement } from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import {
  LOGIN_ROUTE,
  HISTORY_ROUTE,
  FAVORITE_ROUTE,
  HOME_ROUTE,
} from '../utils/const'
import { useAuth } from '../hooks/useAuth.hook'
import { useAppDispatch, useAppSelector } from '../hooks/redux.hook'
import { logoutService } from '../utils/authService'
import { useTheme } from '../providers/ThemeProvider'
import ThemeButton from './ThemeButton'

export const NavBar = (): ReactElement => {
  const { token, login, logout } = useAuth()

  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.user)
  useEffect(() => {
    if (user.token) {
      login(user.token, user.id)
    }
  }, [user, login])

  const logOut = () => {
    logoutService(dispatch).then(() => {
      logout()
    })
  }
  const { isDark } = useTheme()

  return (
    <Navbar
      bg={isDark ? 'dark' : 'light'}
      data-bs-theme={isDark ? 'dark' : 'light'}
    >
      <Container>
        <Nav.Link href={HOME_ROUTE}>Home</Nav.Link>
        {token ? (
          <Nav className="ml-auto">
            <div
              className="d-flex px-5"
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <Nav.Link
                style={isDark ? { color: 'white' } : { color: 'black' }}
                href={FAVORITE_ROUTE}
              >
                Избранное
              </Nav.Link>
              <Nav.Link
                style={isDark ? { color: 'white' } : { color: 'black' }}
                href={HISTORY_ROUTE}
              >
                История
              </Nav.Link>
              <ThemeButton />
            </div>
            <Nav.Link href={LOGIN_ROUTE}>
              <Button variant="outline-danger" onClick={() => logOut()}>
                Выйти
              </Button>
            </Nav.Link>
          </Nav>
        ) : (
          <Nav className="ml-auto">
            <Nav.Link href={LOGIN_ROUTE}>
              <Button variant="outline-danger">Авторизация</Button>
            </Nav.Link>
          </Nav>
        )}
      </Container>
    </Navbar>
  )
}
