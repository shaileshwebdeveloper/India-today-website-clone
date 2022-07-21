import { Button, Stack } from '@chakra-ui/react'
import React from 'react'

export const Top = () => {
  return (
    <Stack spacing="1rem" direction="row" m="10px" ml="20%" border="none"> 
      <Button  color="grey" bg="none"  size='xs'>IndiaToday</Button>
      <Button  color="grey" bg="none"  size='xs'>Malayalam</Button>
      <Button  color="grey" bg="none"  size='xs'>Business Today</Button>
      <Button  color="grey" bg="none"  size='xs'>DailyO</Button>
      <Button  color="grey" bg="none"  size='xs'>Aaj Tak</Button>
      <Button  color="grey" bg="none"  size='xs'>Lallantop</Button>
      <Button  color="grey" bg="none"  size='xs'>Bangla</Button>
      <Button  color="grey" bg="none"  size='xs'>GNTTV</Button>
      <Button  color="grey" bg="none"  size='xs'>iChowk</Button>
      <Button  color="grey" bg="none"  size='xs'>Reader’s Digest</Button>
    </Stack>
  )
}
