import React from 'react'
import { Form } from './Form'
import { Hr1 } from './Hr1'
import { Hr2 } from './Hr2'
import { LoginBottom } from './LoginBottom'
import { LoginTop } from './LoginTop'
import { Networks } from './Networks'
import Social from './Social'


export const SignIn = () => {
  return (
    <div>
    <LoginTop/>
    <div style={{width : "35%", marginLeft: "35%"}}>
    <Hr1/>
    <Social/>
    <Hr2/>
    <Form/>
    <Networks/>
    </div>
    <LoginBottom/>
    </div>
  )
}
