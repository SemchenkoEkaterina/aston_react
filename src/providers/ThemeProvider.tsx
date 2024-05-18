import { ReactNode, createContext, useContext, useState, useMemo } from 'react'

interface IThemeContext {
  isDark: boolean
  toggleTheme: () => void
}

export const ThemeContext = createContext<IThemeContext | undefined>(undefined)

export const useTheme = () => {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('context error')
  }

  return context
}

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark((prev) => !prev)
  }
  const value = useMemo(() => ({ isDark, toggleTheme }), [isDark])

  return (
    <ThemeContext.Provider value={value}> {children} </ThemeContext.Provider>
  )
}
