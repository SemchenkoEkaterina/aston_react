import { useEffect, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { HOME_ROUTE } from '../utils/const'

interface IUseAuth {
  token: string
  userId: string
  login: (token: string, userId: string) => void
  logout: () => void
}

export const useAuth = (): IUseAuth => {
  const localToken: string | null = localStorage.getItem('token')
  const localUserId: string | null = localStorage.getItem('userId')

  const [token, setToken] = useState<string>(localToken || '')
  const [userId, setUserId] = useState<string>(localUserId || '')
  const navigate = useNavigate()

  useEffect(() => {
    if (localToken) {
      setToken(localToken)
    }
    if (localUserId) {
      setUserId(localUserId)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const login = useCallback(
    (newToken: string, newUserId: string) => {
      if (newToken) {
        localStorage.setItem('token', newToken)
        setToken(newToken)
        localStorage.setItem('userId', newUserId)
        setUserId(newUserId)
        navigate(HOME_ROUTE)
      }
    },
    [navigate],
  )

  const logout = useCallback(() => {
    localStorage.removeItem('token')
    setToken('')
    localStorage.removeItem('userId')
    setUserId('')
    navigate('signin')
  }, [navigate])

  return { token, userId, login, logout }
}
