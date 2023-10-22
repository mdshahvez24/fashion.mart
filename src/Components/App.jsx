import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'
import Shop from './Shop'
import Login from './Login'
import SignUp from './SignUp'
import Profile from './Profile'
import Cart from './Cart'
import SingleProductPage from './SingleProductPage'
import UpdateProfile from './UpdateProfile'
import Checkout from './Checkout'
import ContactPage from './ContactPage'
import AdminHome from './Admin/AdminHome'

export default function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/shop/:mc/:sc/:br" element={<Shop/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/single-product-page/:_id" element={<SingleProductPage/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/update-profile" element={<UpdateProfile/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/contactPage" element={<ContactPage/>}/>
   
            <Route path="admin-home" element={<AdminHome/>}/>
   
      </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}
