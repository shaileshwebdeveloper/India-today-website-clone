import React from 'react'
import { Routes, Route } from "react-router-dom";
import { SignIn } from '../Components/Login/SignIn';
import { SignUp } from '../Components/Login/SignUp';
import { Home } from '../Components/MainPage/Home';


export const AllRoutes = () => {
  return (
    <div>
    <Routes>
     <Route  path='/' element={<Home/>}/>
     <Route  path='/sign-in' element={<SignIn/>}/>
     <Route  path='/sign-up' element={<SignUp/>}/>
    </Routes>
    </div>
  )
}
