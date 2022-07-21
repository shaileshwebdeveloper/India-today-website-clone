import React from 'react'
import { Flex, Text } from '@chakra-ui/react'

export const Hr1 = () => {
  return (
    <Flex direction="row" justifyContent="center" mt="10px" mb="10px"> 
    <div>
    <hr style={{display : "inline-block", width : "100px", border: "0.5px solid grey"}}/>
    </div>
    <Text fontSize='xl' color="grey">Sign in via<span><hr width="100px"/></span></Text>
    <div>
    <hr style={{display : "inline-block", width : "100px", border: "0.5px solid grey"}}/>
    </div>
    </Flex>
  )
}
