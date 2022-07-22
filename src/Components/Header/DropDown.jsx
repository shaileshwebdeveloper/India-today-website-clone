
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Link, useColorModeValue
} from '@chakra-ui/react';


// const ListHeader = ({ children }: { children: ReactNode }) => {
//     return (
//       <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
//         {children}
//       </Text>
//     );
//   };
  


export default function DropDown() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'5xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            {/* <ListHeader>Company</ListHeader>      */}
            <Link href={'#'}>HEALTH</Link>
            <hr style={{border : "0.5px solid grey", width: "100%"}}/>
            <Link href={'#'}>TRENDING</Link>
            <hr style={{border : "0.5px solid grey", width: "100%"}}/>
            <Link href={'#'}>VIDEOS</Link>
            <hr style={{border : "0.5px solid grey", width: "100%"}}/>
            <Link href={'#'}>EDUCATION</Link>
            <hr style={{border : "0.5px solid grey", width: "100%"}}/>
            <Link href={'#'}>AUTO</Link>
            <hr style={{border : "0.5px solid grey", width: "100%"}}/>
            <Link href={'#'}>CITIES</Link>
            <hr style={{border : "0.5px solid grey", width: "100%"}}/>
          </Stack>

          <Stack align={'flex-start'}>
            {/* <ListHeader>Support</ListHeader> */}
            <Link href={'#'}>CRIME</Link>
             <hr style={{border : "0.5px solid grey", width: "100%"}}/>
            <Link href={'#'}>LIFESTYLE</Link>
             <hr style={{border : "0.5px solid grey", width: "100%"}}/>
            <Link href={'#'}>BINGE WATCH</Link>
             <hr style={{border : "0.5px solid grey", width: "100%"}}/>
            <Link href={'#'}>TELEVISION</Link>
             <hr style={{border : "0.5px solid grey", width: "100%"}}/>
            <Link href={'#'}>INTERACTIVES</Link>
             <hr style={{border : "0.5px solid grey", width: "100%"}}/>
            <Link href={'#'}>VISUAL STORIES</Link>
             <hr style={{border : "0.5px solid grey", width: "100%"}}/>
          </Stack>

          <Stack align={'flex-start'}>
            {/* <ListHeader>Legal</ListHeader> */}
            <Link href={'#'}>HOROSCOPES</Link>
             <hr style={{border : "0.5px solid grey", width: "100%"}}/>
            <Link href={'#'}>FACT CHECK</Link>
             <hr style={{border : "0.5px solid grey", width: "100%"}}/>
            <Link href={'#'}>DIU</Link>
             <hr style={{border : "0.5px solid grey", width: "100%"}}/>
            <Link href={'#'}>NEWSMO</Link>
             <hr style={{border : "0.5px solid grey", width: "100%"}}/>
            <Link href={'#'}>SHOPPING</Link>
             <hr style={{border : "0.5px solid grey", width: "100%"}}/>
            <Link href={'#'}>GAMING</Link>
             <hr style={{border : "0.5px solid grey", width: "100%"}}/>
          </Stack>

          <Stack align={'flex-start'}>
            {/* <ListHeader>Legal</ListHeader> */}
            <Link href={'#'}>CODE OF ETHICS</Link>
             <hr style={{border : "0.5px solid grey", width: "100%"}}/>
            <Link href={'#'}>RATE CARD</Link>
             <hr style={{border : "0.5px solid grey", width: "100%"}}/>
            <Link href={'#'}>DARK MODE</Link>
             <hr style={{border : "0.5px solid grey", width: "100%"}}/>
             </Stack>

        </SimpleGrid>
      </Container>

      </Box>
  );
}


