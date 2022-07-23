import { FormControl, Input, Flex, Text, Button } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";



export const Form = () => {

  const navigate = useNavigate();

  const Signin = () => {
    alert('Successfully logged In')
    navigate('/');
    
  }

  return (
    <div>
      <FormControl>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-envelope"
            viewBox="0 0 16 16"
          >
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
          </svg>
          <Input type="text" placeholder="Enter Your Email/Mobile" />
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-key"
            viewBox="0 0 16 16"
          >
            <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z" />
            <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
          </svg>
          <Input type="text" placeholder="Enter Your Password" />
        </div>

        <Flex m="10px" gap="2px">
          <input type="checkbox" style={{ marginTop: "5px" }} />
          <Text fontSize="sm">Remember Me</Text>
        </Flex>

        <Flex justifyContent="space-between" color="#0877cc" fontWeight="500">
          <Text fontSize="sm">Forgot password?</Text>
          <Text fontSize="sm">Login via OTP</Text>
        </Flex>

        <Button
          sx={{
            backgroundColor: "#2a2a72",
            backgroundImage: "linear-gradient(315deg, #2a2a72 0%, #009ffd 74%)",
            color: "white",
            padding: "20px  60px",
            margin: "30px 0px",
          }}
          onClick = {Signin}
        >
          <Text fontSize="2xl">Log in</Text>
        </Button>
      </FormControl>
    </div>
  );
};
