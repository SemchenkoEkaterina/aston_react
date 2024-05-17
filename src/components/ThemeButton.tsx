import { Form } from 'react-bootstrap'
import { useTheme } from '../providers/ThemeProvider'

const ThemeButton = () => {
  const { isDark, toggleTheme } = useTheme()
  return (
    <Form>
      <Form.Check
        type="switch"
        id="custom-switch"
        label="Тема"
        onClick={toggleTheme}
        style={
          isDark
            ? { backgroundColor: 'black', color: 'white' }
            : {
                backgroundColor:
                  'rgba(var(--bs-light-rgb), var(--bs-bg-opacity))',
                color: 'black',
              }
        }
      />
    </Form>
  )
}

export default ThemeButton
