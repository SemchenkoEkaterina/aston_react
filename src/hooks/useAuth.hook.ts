import { useEffect, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { HOME_ROUTE, LOGIN_ROUTE } from '../utils/const'

interface IUseAuth {
  token: string
  login: (token: string) => void
  logout: () => void
}

export const useAuth = (): IUseAuth => {
  const localToken: string | null = localStorage.getItem('token')

  const [token, setToken] = useState<string>(localToken || '')
  const navigate = useNavigate()

  useEffect(() => {
    if (localToken) {
      setToken(localToken)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const login = useCallback(
    (newToken: string) => {
      if (newToken) {
        localStorage.setItem('token', newToken)
        setToken(newToken)
        navigate(HOME_ROUTE)
      }
    },
    [navigate],
  )

  const logout = useCallback(() => {
    localStorage.removeItem('token')
    setToken('')
    navigate('signin')
  }, [navigate])

  return { token, login, logout }
}
