import React from "react"
import Welcome from '../main/Welcome';
//import Footer from './components/footer/Footer';
import Home from '../main/Home';
import SignIn from '../main/SignIn';
import SignUp from '../main/SignUp';
import ProfileMenu from '../profile/ProfileMenu';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Profile from '../profile/Profile';
import MyAccount from '../profile/MyAccount';


const TopNav = () => {
  return (
    <>
    <Router>
      <nav className='topnav'>
        <Link to='/'>Home</Link>
        <Link to='/welcome'>Welcome</Link>
        <Link to='/signin'>SignIn</Link>
        <Link to='/signup'>SignUp</Link>
        <ProfileMenu />
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/welcome' element={<Welcome />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/myaccount' element={<MyAccount />} />
      </Routes>

    </Router>
    </>
  )
}

export default TopNav
