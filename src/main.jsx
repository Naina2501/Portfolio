import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Home/Home.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Projects from './Components/Project/Projects.jsx'
import { Contactus, Skills } from './Components/index.js'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
          path: "/Projects",
          element: <Projects />,
      },
      {
        path: "/Contactus",
        element: <Contactus />,
    },
    {
      path: "/Skills",
      element: <Skills />,
  },
      ],
    },
    ])
    

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={router}/>
    
  </StrictMode>,
)
