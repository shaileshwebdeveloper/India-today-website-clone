import React from 'react'
import {Box, SimpleGrid, Text, Grid, GridItem, Container} from "@chakra-ui/react"
import { useState, useEffect} from 'react'
import axios from 'axios'
import './main.css'
import { Buttons } from './Buttons'

export const Main = () => {


const [data, setData] = useState([])

const [read, setRead] = useState([])

const [watch, setWatch] = useState([])

const [top, setTop] = useState([])

const [page, SetPage] = useState(1)

const pageChange = (e) => {
    SetPage(e.target.innerText)
    console.log(page)
}


 useEffect(() => {

  axios.get(`https://india-today-api.herokuapp.com/news?_page=${page}&_limit=12`)
  .then(res => {
    setData(res.data)
  })

  axios.get("https://india-today-sidebar.herokuapp.com/Read")
  .then(res => {
    setRead(res.data)
  })

  axios.get("https://india-today-sidebar.herokuapp.com/watch")
  .then(res => {
    setWatch(res.data)
  })

  axios.get("https://india-today-sidebar.herokuapp.com/top")
  .then(res => {
    setTop(res.data)
  })


 }, [page])
 

    
  return (
  <div style={{marginBottom : "100px"}}>
  <SimpleGrid columns={2} spacing={10} margin="50px">
  <Box height='auto' width={"120%"} ml="90px">
  <Text fontSize='lg' align={"left"}>News/India</Text>
  <hr />
  <Text fontSize='4xl' fontWeight={'700'} align={"left"}>India</Text>
  <hr style={{marginBottom : "50px"}}/>

  {data.map(item => (
    <Grid
     templateAreas={`"img news"`}
     gridTemplateColumns={'160px 1fr'}
     h='160px'
     gap='1'
     mt={"-20px"}
     mb={"5px"}
   >
    <GridItem pl='2' area={'img'} >
    <div class="item">
      <img   style={{ width : "100%", height : "70%" , float:"left", objectFit: "cover", boxSizing: "border-box",overflow: "hidden"}} src={`${item.image}`} alt="" />
      <div class="item-overlay top"></div>
      </div>
    </GridItem>
  <GridItem pl='2' area={'news'} >
  <Box align={"left"}>
        <Text fontSize='xl' fontWeight={'700'} mt="-5px">{item.title}</Text>
        <Text fontSize='lg' >{item.description}</Text>
      </Box>
  </GridItem>
  </Grid>
))}

 </Box>


<Container border={"0.2px solid grey"} ml="200px" width={"60%"}>
  <Box p={"10px"}>
  <Text fontSize={"xl"} color="#bf0a0a" fontWeight={"700"}  align="left" mb={"20px"}> READ THIS  <hr class = "read"/> </Text>
  <div>
   {read.map(item => (
    <>
    <Grid
     templateAreas={`"img news"`}
     gridTemplateColumns={'1fr 100px'}
     h='auto'
     gap='1'
     padding={"10px"}
     borderBottom = {"1px solid grey"}
     id = "uuidv4()"
   >
    <GridItem pl='2' area={'news'} >
      <img style={{ width : "100%", height : "100%" , float:"left", objectFit: "cover", boxSizing: "border-box",overflow: "hidden"}} src={`${item.image}`} alt="" />
    </GridItem>
    <GridItem pl='2' area={'img'} width="100%">
    <Box align={"left"}>
      <Text fontSize='md' fontWeight={'500'} >{item.title}</Text>
    </Box>
    </GridItem>
    </Grid>
    </>
    
))}
</div>
  </Box>


  <Box p={"10px"}>
  <Text fontSize={"xl"} color="#bf0a0a" fontWeight={"700"}  align="left" mb={"20px"}>WATCH RIGHT NOW  <hr class = "watch"/></Text>
  <div>
   {watch.map(item => (
    <>
    <Grid
    id = "uuidv4()"
     templateAreas={`"img news"`}
     gridTemplateColumns={'1fr 100px'}
     h='auto'
     gap='1'
     padding={"10px"}
     borderBottom = {"1px solid grey"}
   >
    <GridItem pl='2' area={'news'} >
      <img style={{ width : "100%", height : "100%" , float:"left", objectFit: "cover", boxSizing: "border-box",overflow: "hidden"}} src={`${item.image}`} alt="" />
    </GridItem>
    <GridItem pl='2' area={'img'} width="100%">
    <Box align={"left"}>
      <Text fontSize='md' fontWeight={'500'} >{item.title}</Text>
    </Box>
    </GridItem>
    </Grid>
    </>
    
))}
</div>
  </Box>


  <Box p={"10px"}>
  <Text fontSize={"xl"} color="#bf0a0a" fontWeight={"700"}  align="left" mb={"20px"}>TOP TAKES 
  <hr class = "line"/>
  </Text>
  <div>
   {read.map(item => (
    <>
    <Grid
     id = "uuidv4()"
     templateAreas={`"img news"`}
     gridTemplateColumns={'1fr 100px'}
     h='auto'
     gap='1'
     padding={"10px"}
     borderBottom = {"1px solid grey"}
   >
    <GridItem pl='2' area={'news'} >
      <img style={{ width : "100%", height : "100%" , float:"left", objectFit: "cover", boxSizing: "border-box",overflow: "hidden"}} src={`${item.image}`} alt="" />
    </GridItem>
    <GridItem pl='2' area={'img'} width="100%">
    <Box align={"left"}>
      <Text fontSize='md' fontWeight={'500'} >{item.title}</Text>
    </Box>
    </GridItem>
    </Grid>
    </>
    
))}
</div>
  </Box>

</Container>
<Buttons onclick = {pageChange}/>
</SimpleGrid>

  </div>
  )
}
