import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './Components/Home/Home.jsx'
import Mobiles from './Components/Mobiles/Mobiles.jsx'
import Root from './Components/Root/Root.jsx'
import Laptops from './Components/Laptops/Laptops.jsx'
import Users from './Components/Users/Users.jsx'
import Posts from './Components/Posts/Posts.jsx'
import User from './Components/User/User.jsx'
import UserDetails from './Components/UserDetails/UserDetails.jsx'
import Albums from './Components/Albums/Albums.jsx'
import AlbumDetails from './Components/AlbumDetails/AlbumDetails.jsx'


const postsPromise = fetch('https://jsonplaceholder.typicode.com/posts/1/comments').then(res => res.json());

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },

      { path: 'mobiles', Component: Mobiles },

      { path: 'laptops', Component: Laptops },

      {
        path: 'users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Users
      },

      {
        path:'users/:userId',
        loader : ({params})=> 
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),

        Component: UserDetails
      },

      {
        path: 'albums',
        loader : () => 
          fetch("https://jsonplaceholder.typicode.com/albums"),
        Component : Albums
      },

      {
        path: 'albums/:userId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/albums/${params.userId}`),
        Component : AlbumDetails
      },

      {
        path: "posts",
        element:
          <Suspense fallback={<span>Loading....</span>}>
            <Posts postsPromise={postsPromise}></Posts>
          </Suspense>
      }
    ]
  },
  {
    path: 'about',
    element: <div>About me</div>
  },
  {
    path: 'blogs',
    element: <div>All my blogs are here</div>
  },
  {
    path: "app",
    Component: App
  },
  {
    path: "app2",
    // element : <App></App>
    // element: <div>Hello</div>
    Component: App
  },
  {
    path: '*',
    element : <h2>Not Found : Error 404 Status</h2>
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
