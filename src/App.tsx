import './App.css'
import MainRouter from './components/routes/Main-Router'
import { NavBar } from './components/NavBar'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './providers/ThemeProvider'

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <NavBar />
        <MainRouter />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
