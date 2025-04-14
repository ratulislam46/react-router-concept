import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './Components/Home/Home.jsx'
import Mobiles from './Components/Mobiles/Mobiles.jsx'
import Root from './Components/Root/Root.jsx'
import Laptops from './Components/Laptops/Laptops.jsx'

// import react router 

const router = createBrowserRouter([
  {
    path : "/",
    Component : Root,
    children : [
      {index : true, Component : Home},
      {path : 'mobiles', Component :Mobiles},
      {path: 'laptops', Component : Laptops}
    ]
  },
  {
    path: 'about',
    element : <div>About me</div>
  },
  {
    path : 'blogs',
    element : <div>All my blogs are here</div>
  },
  {
    path: "app",
    Component : App
  },
  {
    path: "app2",
    // element : <App></App>
    // element: <div>Hello</div>
    Component: App
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
