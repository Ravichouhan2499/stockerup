import React from 'react'
import NavbarComponent from './component/navbarComponent/navbar'
import Caro from './component/caresuolComponent/caro'
import Feature from './component/featureComponent/feature'
import About from './component/aboutComponent/about'
import MileStone from './component/mileStoneComponent/mileStone'
import Model from './component/modelComponent/model'
import Footer from './component/footerComponent/footer'
import Service from './component/serviceComponent/service'
import { Route, Routes } from 'react-router-dom'
import Terms from './component/TermsComponent/terms'
import Home from './pages/homePages/home'
import Team from './component/teamComponent/team'
import Blog from './component/blogComponent/blog'
import ContactUs from './component/contactComponent/contact'
import AdminDashboard from './adminComponent/adminDashBoard/adminDashboard'
import Login from './adminComponent/loginComponent/login'
import SignUp from './adminComponent/signUpComponent/signUp'

export default function App() {
  return (

    
    <div>

      

      <NavbarComponent/>
      <Routes>
        <Route path='/terms' element={<Terms/>} > </Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/team' element={<Team/>}></Route>
        <Route path='/services' element={<Service/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/contactUs' element={<ContactUs/>}></Route>
        <Route path='/adminDashboard' element={<AdminDashboard/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signUp' element={<SignUp/>}></Route>


      </Routes>
      
      

      <Footer/>
    </div>
  )
}
