import React, { useEffect } from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import {
  LOGIN_ROUTE,
  HISTORY_ROUTE,
  FAVORITE_ROUTE,
  HOME_ROUTE,
} from '../utils/const'
import { useAuth } from '../hooks/useAuth.hook'
import { useAppDispatch, useAppSelector } from '../hooks/redux.hook'
import { ReactElement } from 'react'
import { logoutService } from '../utils/authService'

export const NavBar = (): ReactElement => {
  const { token, login, logout } = useAuth()

  const dispatch = useAppDispatch()
  const user = useAppSelector((state: any) => state.user)
  useEffect(() => {
    if (user.token) {
      login(user.token)
    }
  }, [user, login])

  const logOut = () => {
    logoutService(dispatch).then(() => {
      logout()
    })
  }

  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Nav.Link href={HOME_ROUTE}>Home</Nav.Link>
        {token ? (
          <Nav className="ml-auto">
            <div className="d-flex px-5">
              <Nav.Link href={FAVORITE_ROUTE}>Избранное</Nav.Link>
              <Nav.Link href={HISTORY_ROUTE}>История</Nav.Link>
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
