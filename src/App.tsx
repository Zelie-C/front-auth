import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Connexion from './routes/Connexion'
import Inscription from './routes/Inscription'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Connexion />
  },
  {
    path: '/connexion',
    element: <Connexion />
  },
  {
    path: '/inscription',
    element: <Inscription />
  }
])

function App() {

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
