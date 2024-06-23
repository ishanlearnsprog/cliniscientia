import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom'

import App from './routes/root/App.jsx'
import Home from './routes/home/Home.jsx'
import About from './routes/about/About.jsx'
import Course from './routes/course/Course.jsx'
import Contact from './routes/contact/Contact.jsx'

import './index.css'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/course',
                element: <Course />
            },
            {
                path: '/contact',
                element: <Contact />
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router }></RouterProvider>
  </React.StrictMode>,
)
