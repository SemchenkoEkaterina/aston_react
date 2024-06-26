import { useEffect, ReactElement } from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
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
  const user = useAppSelector()
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
        <Nav.Link as={Link} to={HOME_ROUTE}>
          Home
        </Nav.Link>
        {token ? (
          <Nav className="ml-auto">
            <div className="d-flex px-5 align-items-center">
              <Nav.Link
                as={Link}
                style={isDark ? { color: 'white' } : { color: 'black' }}
                to={FAVORITE_ROUTE}
              >
                Избранное
              </Nav.Link>
              <Nav.Link
                as={Link}
                style={isDark ? { color: 'white' } : { color: 'black' }}
                to={HISTORY_ROUTE}
              >
                История
              </Nav.Link>
              <ThemeButton />
            </div>
            <Nav.Link as={Link} to={LOGIN_ROUTE}>
              <Button variant="outline-danger" onClick={() => logOut()}>
                Выйти
              </Button>
            </Nav.Link>
          </Nav>
        ) : (
          <Nav className="ml-auto">
            <Nav.Link as={Link} to={LOGIN_ROUTE}>
              <Button variant="outline-danger">Авторизация</Button>
            </Nav.Link>
          </Nav>
        )}
      </Container>
    </Navbar>
  )
}
