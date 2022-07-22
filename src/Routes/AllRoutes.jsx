import React from 'react'
import { Routes, Route } from "react-router-dom";
import { SignUp } from '../Components/Login/SignUp';
import { Home } from '../Components/MainPage/Home';


export const AllRoutes = () => {
  return (
    <div>
    <Routes>
     <Route  path='/' element={<Home/>}/>
     <Route  path='/sign-in' element={<SignUp/>}/>
    </Routes>
    </div>
  )
}
