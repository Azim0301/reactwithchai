import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Route,RouterProvider , createBrowserRouter, createRoutesFromElements} from  'react-router-dom'
import Layout from './layout.jsx'
import Home from './components/home/home.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'
import NotFound from './NotFound.jsx'
import User from './components/user/User.jsx'
import Github ,{githubInfoLoader} from './components/github/Github.jsx'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children:[
//       {
//         path:"",
//         element:<Home />
//       },
//       {
//         path:"about",
//         element:<About />
//       },
//       {
//         path:"contact",
//         element:<Contact />
//       },
//       {
//         path:"*",
//         element:<NotFound />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/home' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={ <Contact />} />
      <Route path='*' element={ <NotFound />} />
      <Route path='user/:userid' element={ <User />} />
      <Route
       loader= {githubInfoLoader}
       path='github' 
       element={ <Github />}
      />
    
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router ={router}/>
  </StrictMode>,
)
