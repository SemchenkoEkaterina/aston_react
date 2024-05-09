import React from 'react'
import FormLogin from '../components/Form'
import { useAppDispatch } from '../hooks/redux.hook'
import { loginWithEmailAndPassword } from '../utils/authService'

const Auth = () => {
  const dispatch = useAppDispatch()

  const handleLogin = async (email: string, password: string) => {
    await loginWithEmailAndPassword(email, password, dispatch)
  }
  return (
    <>
      <FormLogin title="login" isLogin={true} handleClick={handleLogin} />
    </>
  )
}

export default Auth
