import { Button, Stack } from '@chakra-ui/react'
import React from 'react'

export const Top = () => {
  return (
    <Stack spacing="1rem" direction="row" m="10px" ml="20%" border="none"> 
      <Button  color="grey" bg="none"  size='xs'>IndiaToday</Button>
      <Button  onClick={() => window.open( 'https://malayalam.indiatoday.in/')} color="grey" bg="none"  size='xs'>Malayalam</Button>
      <Button  onClick={() => window.open( 'https://www.businesstoday.in/')} color="grey" bg="none"  size='xs'>Business Today</Button>
      <Button  onClick={() => window.open( 'https://www.dailyo.in/')} color="grey" bg="none"  size='xs'>DailyO</Button>
      <Button  onClick={() => window.open( 'https://www.aajtak.in/')} color="grey" bg="none"  size='xs'>Aaj Tak</Button>
      <Button  onClick={() => window.open( 'https://www.thelallantop.com/')} color="grey" bg="none"  size='xs'>Lallantop</Button>
      <Button  onClick={() => window.open( 'https://bangla.aajtak.in/')} color="grey" bg="none"  size='xs'>Bangla</Button>
      <Button  onClick={() => window.open( 'https://www.gnttv.com/')} color="grey" bg="none"  size='xs'>GNTTV</Button>
      <Button  onClick={() => window.open( 'https://www.ichowk.in/')} color="grey" bg="none"  size='xs'>iChowk</Button>
      <Button  onClick={() => window.open( 'https://www.readersdigest.in/')} color="grey" bg="none"  size='xs'>Reader’s Digest</Button>
    </Stack>
  )
}
