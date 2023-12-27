import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home"
import Contact from "./Contact"
import ListproductsDetail from './ListProductsDetail'
import ProductsDetail from './ProductsDetail'
import Cart from './Cart'
import Login from './Login'
import Signup from './Signup'
import Addsp from './Addsp'
import Admin from './Admin'
import Header from './Header'
import LoginAdmin from './Login_admin'
import Sptimkiem from './Sptimkiem'
import Footer from './Footer'
function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/admin_addsp' element={<Addsp />}></Route>
            <Route path='/:type' element={<ListproductsDetail />}></Route>
            <Route path='/:type/:id' element={<ProductsDetail />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/login-admin' element={<LoginAdmin />}></Route>
            <Route path='/signup' element={<Signup />}></Route>
            <Route path='/admin' element={<Admin />}></Route>
            <Route path='/search/:id' element={<Sptimkiem />}></Route>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App