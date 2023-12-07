import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Connexion from './routes/Connexion'
import Inscription from './routes/Inscription'
import Home from './routes/Home'
import Page from './components/Page'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Page protectedPage={true} Content={Home} />
  },
  {
    path: '/home',
    element: <Page protectedPage={true} Content={Home} />
  },
  {
    path: '/connexion',
    element: <Page protectedPage={false} Content={Connexion} />
  },
  {
    path: '/inscription',
    element: <Page protectedPage={false} Content={Inscription} />
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
