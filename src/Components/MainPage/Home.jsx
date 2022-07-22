import { Divider } from '@chakra-ui/react'
import React from 'react'
// import Footer from '../Footer/Footer'
import {Logo} from '../Header/Logo'
import { Navbar } from '../Header/Navbar'
import { Top } from '../Header/Top'
import { Main } from '../MainPage/Main'

export const Home = () => {
  return (
    <div className="App">
      <Top/>     
      <Divider />    
      <Logo/>
      <Navbar/>
      <Main/>
      {/* <Login/> */}
      {/* <Footer/> */}
    </div>
  )
}
