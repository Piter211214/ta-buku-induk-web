import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'

import ErrorPage from './layout/ErrorPage'
import FormLogin from './components/FormLogin'
import Dashboard from './components/Dashboard'

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>null page</div>,
    errorElement: <ErrorPage />,
  },
  {
    path: "login",
    element: <FormLogin />
  },
  {
    path: "dashboard",
    element: <Dashboard />
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)