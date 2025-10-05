import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router";
import Root from './Component/Root/Root';
import { StrictMode, Suspense } from 'react';
import Home from './Component/Home/Home';
import Mobiles from './Component/Mobiles/Mobiles';
import Laptops from './Component/Laptops/Laptops'
import Users from './Component/Users/Users';
import UserDetails from './Component/UserDetails/UserDetails';

const fetchPromise = async () => {
  const url = 'https://jsonplaceholder.typicode.com/users';
  const res = await fetch(url);
  return res.json();
}
const userPromise = fetchPromise();

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
        element: <Suspense>
          <Users userPromise={userPromise}></Users>
        </Suspense>
      },
      {
        path: '/users/:userId',
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails
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
