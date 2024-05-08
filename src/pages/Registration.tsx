import React from 'react'
import FormLogin from '../components/Form'
import { useAppDispatch } from '../hooks/redux.hook'
import { signUpWithEmailAndPassword } from '../utils/authService'

const Registration = () => {
  const dispatch = useAppDispatch()

  const handleRegistration = async (email: string, password: string) => {
    await signUpWithEmailAndPassword(email, password, dispatch)
  }
  return (
    <>
      <FormLogin
        title="registration"
        isLogin={false}
        handleClick={handleRegistration}
      />
    </>
  )
}

export default Registration
