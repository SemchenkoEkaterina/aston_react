import React, { useState } from 'react'
import { Button, Card, Container, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import { NavLink, useNavigate } from 'react-router-dom'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/const'
import { FormProps } from '../types'

const FormLogin = ({ title, isLogin, handleClick }: FormProps) => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const navigate = useNavigate()

  const onSubmitForm = async () => {
    try {
      await handleClick(email, pass)
      navigate('/')
    } catch (error) {
      navigate('/login')
      alert(error)
    }
  }

  return (
    <>
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ height: window.innerHeight - 76 }}
      >
        <Card style={{ width: 600 }} className="p-5">
          <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
          <Form className="d-flex flex-column">
            <Form.Control
              className="mt-4"
              placeholder="Введите ваш e-mail..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Control
              className="mt-4"
              placeholder="Введите ваш пароль..."
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
            <Row
              className="mt-4 d-flex justify-content-between"
              style={{ width: '102%' }}
            >
              {isLogin ? (
                <div style={{ width: '85%' }}>
                  Нет аккаунта?{' '}
                  <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                </div>
              ) : (
                <div style={{ width: '79%' }}>
                  Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                </div>
              )}
              <Button
                style={isLogin ? { width: '15%' } : { width: '21%' }}
                className="align-self-end"
                variant="outline-danger"
                size="sm"
                onClick={onSubmitForm}
              >
                {isLogin ? 'Войти' : 'Регистрация'}
              </Button>
            </Row>
          </Form>
        </Card>
      </Container>
    </>
  )
}

export default FormLogin
