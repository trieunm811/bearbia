import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home"
import Contact from "./Contact"
import Admin from './Admin'
import ListproductsDetail from './ListProductsDetail'
import ProductsDetail from './ProductsDetail'
import Cart from './Cart'
import Login from './Login'
import Signup from './Signup'
function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/admin' element={<Admin />}></Route>
            <Route path='/:type' element={<ListproductsDetail />}></Route>
            <Route path='/:type/:id' element={<ProductsDetail />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/signup' element={<Signup />}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App