import './App.css'
import MainRouter from './components/routes/Main-Router'
import { NavBar } from './components/NavBar'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
      <MainRouter />
    </>
  )
}

export default App
