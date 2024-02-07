import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import User from './Components/User/User'
import Github from './Components/Github/Github'
// to ye router kese kaam krta  ha to jaise hmne navlink se different links bna =rkhe ha to unme hme to='' me kuch value deni hogi ki hm kha ja rhe ha to jaise hmne about ke nav link me to ko to="/about" de rkhi ha to jb bhi hm us pr click krege to ye url ke path me /about pr le jayega ab us hm chahte ha ki jb bhi us pr click kre to about component display ho to hmne router differet paths de rkhi ha to jo bhi hmne (to) ki value de rkhi ha us se sari children paths compare hogi or jo bhi match hogi wo dispay ho jayegi => or ye case senstive nhi hota agrhm yha path me capital letter se lete ha or navlink me small to bhi ye work krega
// const router=createBrowserRouter([
//   {
//     path:'/',                                                                              
//     element: <Layout/>,
//     children:[
//     {
//       path:"",
//       element: <Home/>
//     },
//     {
//       path:"about",
//       element: <About/>
//     },
//     {
//       path:"contact",
//       element:<Contact/>
//     }
//     ]
//   }
// ])
//   we can oy do this by another way 

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
       <Route path='' element={<Home/>}/>
       <Route path='About' element={<About/>}/>
       <Route path='Contact-us' element={<Contact/>}/>
       <Route path='user/:userid/:usernumber' element={<User/>}/>
       <Route path='Github' element={<Github/>}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
