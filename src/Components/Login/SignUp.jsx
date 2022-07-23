import {  Button, Flex, FormControl, Input, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { AppContext } from '../AppContext'
import { CountriesSelectTag } from './CountriesSelectTag'
import { LoginBottom } from './LoginBottom'
import { Networks } from './Networks'
import Social from './Social'
import {useNavigate} from 'react-router-dom';

export const SignUp = () => {

    const navigate = useNavigate();

    const {navigateHome} = useContext(AppContext)

   const Signup = () => {
     alert('Successfully SignUp')
     navigate('/sign-in');
     
   }


  return (
    <div>
    
    <div className='haha' onClick={navigateHome}>
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
     <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
     </svg>Back to India Today</div>


    <div style={{width : "36%", marginLeft: "35%"}}>  
    <Flex direction="row" justifyContent="center" mt="10px" mb="10px"> 
    <div>
    <hr style={{display : "inline-block", width : "100px", border: "0.5px solid grey"}}/>
    </div>
    <Text fontSize='xl' color="grey">Sign Up by<span><hr width="100px"/></span></Text>
    <div>
    <hr style={{display : "inline-block", width : "100px", border: "0.5px solid grey"}}/>
    </div>
    </Flex>
    <Social/>
    <Flex direction="row" justifyContent="center" m="15px"> 
    <div>
    <hr style={{display : "inline-block", width : "80px", border: "0.5px light grey"}}/>
    </div>
    <Text fontSize='lg' color="grey">Sign Up using your Email Id/Mobile No<span><hr width="100px"/></span></Text>
    <div>
    <hr style={{display : "inline-block", width : "80px", border: "0.2px light grey"}}/>
    </div>
    </Flex>


    <div>
      <FormControl>
 
        <SimpleGrid column={2} gap={"50px"}>
         <Flex>
            <div><CountriesSelectTag/></div>
            <div>
            <Input ml={'30px'} placeholder='Enter Your Full Name'></Input>
            <Text color={'red'} fontWeight='500'>Full name field is required</Text>
            </div>
         </Flex>
      
         <Flex mb={'30px'}>
         <div>
         <Input placeholder='Enter Your Email or Mobile'></Input>
         <Text color={'red'} fontWeight='500' fontSize={'sm'}>Full name field is required</Text>
         </div>
         <div>
         <Input placeholder='Password'  type="password" ml={'60px'}/>
         </div>

         </Flex>

        </SimpleGrid>

        <div>
        <Flex mb={'5px'}>
        <input type="checkbox" style={{marginTop : '5px'}}/>
        <Text fontSize={'sm'}  align='left' ml={'20px'}>I agree to the SSO login privacy terms and I warrant that I am above 16 years of age. *</Text>
        </Flex>
        <Flex mb={'5px'}>
        <input type="checkbox" style={{marginTop : '5px'}}/>
        <Text fontSize={'sm'} align='left' ml={'20px'}>I agree to the processing of my personal information for profiling such as My Credits, Follow activity , Personalised recommendations and Advertisements.</Text>
        </Flex>
        <Flex mb={'5px'}>
        <input type="checkbox" style={{marginTop : '5px'}}/>
        <Text fontSize={'sm'} align='left' ml={'20px'}>I wish to receive custom communications i.e. Emails, newsletters, SMS, notifications from India Today based on my interests and my activities on the website.</Text>
        </Flex>
        </div>

        <Button
          sx={{
            backgroundColor: "#2a2a72",
            backgroundImage: "linear-gradient(315deg, #2a2a72 0%, #009ffd 74%)",
            color: "white",
            padding: "20px  60px",
            margin: "30px 0px",
          }}
          onClick = {Signup}
        >
          <Text fontSize="2xl">Sign Up</Text>
        </Button>
      </FormControl>
    </div>





    
    <Networks/>
    </div>
    <LoginBottom/>

    </div>
  )
}
