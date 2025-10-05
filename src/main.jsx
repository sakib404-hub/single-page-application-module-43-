import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router";
import Root from './Component/Root/Root';
import { StrictMode } from 'react';
import Home from './Component/Home/Home';
import Mobiles from './Component/Mobiles/Mobiles';
import Laptops from './Component/Laptops/Laptops'
import Users from './Component/Users/Users';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: '/mobiles',
        Component: Mobiles
      },
      {
        path: '/laptops',
        Component: Laptops
      },
      {
        path: '/users',
        Component: Users,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider
      router={router}>
    </RouterProvider>
  </StrictMode>
)

/**
 * ! Router Setup Need three Things
 * ? 1 --> Importing browserRouter and RouterProvider
 * ? 2 --> Providing the defination as router to the CreateBrowserRouter
 * ? 3 --> Passing it to the values
 */

/**
 * ? 1 . use :: usersPromise > Suspense > Promise > use(userPromise)
 * ? 2 . useState  + useEffect (() => {}, [])
 * ? 3 . load Data Before Router Component is Rendered
 */
