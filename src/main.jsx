import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router";
import Root from './Component/Root/Root';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root
  }
])


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>
)
