import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Connexion from './routes/Connexion'
import Inscription from './routes/Inscription'
import Home from './routes/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/connexion',
    element: <Connexion />
  },
  {
    path: '/inscription',
    element: <Inscription />
  },
])

function App() {

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
