import React from 'react'
import {  Flex, Text } from '@chakra-ui/react'

export const Hr2 = () => {
  return (
    <Flex direction="row" justifyContent="center" m="15px"> 
    <div>
    <hr style={{display : "inline-block", width : "80px", border: "0.5px light grey"}}/>
    </div>
    <Text fontSize='lg' color="grey">Or sign in using your email Or mobile no<span><hr width="100px"/></span></Text>
    <div>
    <hr style={{display : "inline-block", width : "80px", border: "0.2px light grey"}}/>
    </div>
    </Flex>
  )
}
