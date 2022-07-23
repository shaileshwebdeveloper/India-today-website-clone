import { Flex, Img, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import './navbar.css'

export const Logo = () => {

  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Flex direction="row" gap ="2rem" justifyContent="center">
        <Text fontSize='4xl' color= {colorMode=== 'light' ?  "#63698d" : 'white'  }  cursor='pointer' mt="50px">NEWS</Text>
        <Text fontSize='4xl' color= {colorMode=== 'light' ?  "#63698d" : 'white'  } cursor='pointer'  mt="50px">LIVE TV</Text>
        <Img src='https://akm-img-a-in.tosshub.com/sites/all/themes/itg/logo.png' marginTop="20px"/>
        <Text fontSize='4xl' color= {colorMode=== 'light' ?  "#63698d" : 'white'  } cursor='pointer' mt="50px">APP</Text>
        <Text fontSize='4xl' color= {colorMode=== 'light' ?  "#63698d" : 'white'  } cursor='pointer'  mt="50px">MAGAZINE</Text>
    </Flex>
  )
}
