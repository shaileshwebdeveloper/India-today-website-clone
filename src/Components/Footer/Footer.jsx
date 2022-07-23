
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  Flex,
  Img
} from '@chakra-ui/react';


export default function Footer() {
  return (
    <Box bg={'black'}
        color={'white'}
    >
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 6 }} spacing="1px">
          <Stack align={'flex-start'}>
            <Text fontWeight={'500'} fontSize={'md'} mb={2}>PUBLICATIONS:</Text>
              <Link fontSize={'xs'}   href={'http://www.businesstoday.in/'}>Business Today</Link>
              <Link fontSize={'xs'} href={'https://www.indiatoday.in/'}>Cosmopolitan</Link>
              <Link fontSize={'xs'} href={'http://www.cosmopolitan.in/'}>India Today</Link>
              <Link fontSize={'xs'} href={'http://mailtoday.in/'}>Mail Today</Link>
              <Link fontSize={'xs'} href={'http://subscriptions.digitaltoday.in/subscriptions/time/subscription.html'}>Money Today</Link>
              <Link fontSize={'xs'} href={'http://www.readersdigest.co.in/'}>Reader's Digest</Link>
              <Link fontSize={'xs'} href={'http://subscriptions.digitaltoday.in/subscriptions/time/subscription.html'}>Time</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <Text fontWeight={'500'} fontSize={'md'} mb={2}>TELEVISION:</Text>
              <Link fontSize={'xs'} href={'https://www.aajtak.in/'}>Aj Tak</Link>
              <Link fontSize={'xs'} href={'http://aajtak.intoday.in/dilliaajtak/'}>Delhi Aj Tak</Link>
              <Link fontSize={'xs'} href={'https://www.gnttv.com/'}>Good News Today</Link>
              <Link fontSize={'xs'} href={'https://www.indiatoday.in/livetv'}>India Today Tv</Link>
            <Text fontWeight={'500'} fontSize={'md'} mt={2}>RADIO</Text>
              <Link fontSize={'xs'} href={'https://www.ishq.com/'}>Ishq FM</Link>
            <Text fontWeight={'500'} fontSize={'md'} mt={2}>GAMING</Text>
              <Link fontSize={'xs'} href={'https://www.indiatodaygaming.com/'}>India Today Gaming</Link>
              <Link fontSize={'xs'} href={'https://www.itg.gg/'}>World Esports Cup</Link>
              <Link fontSize={'xs'} href={'https://espl.itg.gg/'}>Esports Premier League</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <Text fontWeight={'500'} fontSize={'md'} mb={2}>EDUCATION</Text>
              <Link fontSize={'xs'} href={'https://www.indiatoday.in/taxonomy/term/1206666'}>India Today Education</Link>
              <Link fontSize={'xs'} href={'http://www.vasantvalley.org/'}>Vasant Valley</Link>
              <Link fontSize={'xs'} href={'https://www.indiatoday.in/bestcolleges/2018'}>Best Colleges India 2018</Link>
              <Link fontSize={'xs'} href={'https://www.indiatoday.in/best-universities'}>Best Universities India 2018</Link>
              <Link fontSize={'xs'} href={'https://www.aajtakcampus.in/'}>Ajtak Campus National</Link>
              <Link fontSize={'xs'} href={'https://www.aajtakcampus.in/'}>Aptitude Test</Link>
          </Stack>


          <Stack align={'flex-start'}>
            <Text fontWeight={'500'} fontSize={'md'} mb={2}>EVENTS</Text>
              <Link fontSize={'xs'} href={'https://aajtak.intoday.in/agenda-aajtak/'}>Agenda Ajtak</Link>
              <Link fontSize={'xs'} href={'http://www.indiatodayconclave.com/'}>India Today Conclave</Link>
              <Link fontSize={'xs'} href={'http://www.robbreportindia.com/limitededition/2018/'}>Robb Report India 2018</Link>
              <Link fontSize={'xs'} href={'https://aajtak.intoday.in/sahitya/2018/'}>Sathitya Aj Tak</Link>
              <Link fontSize={'xs'} href={'http://theredlab.in/'}>The Real Lab</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <Text fontWeight={'500'} fontSize={'md'} mb={2}>PRINTING</Text>
              <Link fontSize={'xs'} href={'http://www.thomsonpress.com/'}>Agenda Ajtak</Link>
            <Text fontWeight={'500'} fontSize={'md'} mb={2}>WELFARE</Text>
              <Link fontSize={'xs'} href={'http://www.caretoday.in/'}>India Today Conclave</Link>
              <Link fontSize={'xs'} href={'http://www.music-today.com/'}>Robb Report India 2018</Link>
            <Text fontWeight={'500'} fontSize={'md'} mb={2}>MUSIC</Text>
              <Link fontSize={'xs'} href={'http://www.music-today.com/'}>Sathitya Aj Tak</Link>
              <Link fontSize={'xs'} href={'http://www.music-today.com/'}>The Real Lab</Link>
          </Stack>

       
          <Stack align={'flex-start'}>
            <Text fontWeight={'500'} fontSize={'md'} mb={2}>SYNDICATIONS</Text>
              <Link fontSize={'xs'} href={'https://www.indiacontent.in/'}>India Content</Link>
              <Link fontSize={'xs'} href={'https://www.headlinestoday.in/'}>Headlines Today</Link>
            <Text fontWeight={'500'} fontSize={'md'} mb={2}>DISTRIBUTION</Text>
              <Link fontSize={'xs'} href={'https://aajtak.intoday.in/distribution/rio/'}>Rate Card</Link>
            <Text fontWeight={'500'} fontSize={'md'} mb={2}>USEFUl LINKS</Text>
              <Link fontSize={'xs'} href={'https://www.indiatoday.in/partners.jsp'}>Partners</Link>
              <Link fontSize={'xs'} href={'https://www.indiatoday.in/pr-newswire'}>Press Release</Link>
              <Link fontSize={'xs'} href={'https://www.indiatoday.in/sitemap'}>SItemap</Link>
              <Link fontSize={'xs'} href={'https://www.indiatoday.in/news.html'}>News</Link>
              <Link fontSize={'xs'} href={'https://www.indiatoday.in/newsletter'}>Newsletter</Link>
              <Link fontSize={'xs'} href={'https://www.indiatoday.in/pr-newswire'}>Press Release</Link>
              <Link fontSize={'xs'} href={'https://www.indiatodaygroup.com/privacy-policy.html'}>Privacy Policy</Link>
              <Link fontSize={'xs'} href={'https://www.indiatoday.in/correction-policy'}>Correction Policy</Link>

          </Stack>
          
        </SimpleGrid>

        <Text fontWeight={'500'} fontSize={'xs'} mb={2}>Download App</Text>
        <Flex justifyContent={"centre"} spacing="2px" gap={"20px"}>
        <Link justifyContent={'centre'} ml="35%"><a href="https://play.google.com/store/search?q=pub:SHailesh">
        <img alt="Get it on Google Play" src="https://developer.android.com/images/brand/en_generic_rgb_wo_45.png" />
        </a></Link>
         <Link><Img  src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Available_on_the_App_Store_%28black%29_SVG.svg/1920px-Available_on_the_App_Store_%28black%29_SVG.svg.png'
          width={'150px'}  height={'47px'}/></Link>
        </Flex>
        <Text fontWeight={'500'} fontSize={'xs'} mb={2}>Copyright © 2022 Living Media India Limited. For reprint rights: Syndications Today</Text>

      </Container>
    </Box>
  );
}