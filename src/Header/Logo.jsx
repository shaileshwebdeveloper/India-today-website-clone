import { Flex, Img, Text } from '@chakra-ui/react'
import React from 'react'

export const Logo = () => {
  return (
    <Flex direction="row" gap ="2rem" justifyContent="center">
        <Text fontSize='4xl' color="#63698d" mt="50px">NEWS</Text>
        <Text fontSize='4xl' color="#63698d" mt="50px">NEWSLIVE TV</Text>
        <Img src='https://akm-img-a-in.tosshub.com/sites/all/themes/itg/logo.png' marginTop="20px"/>
        <Text fontSize='4xl' color="#63698d" mt="50px">APP</Text>
        <Text fontSize='4xl' color="#63698d" mt="50px">MAGAZINE</Text>
    </Flex>
  )
}
