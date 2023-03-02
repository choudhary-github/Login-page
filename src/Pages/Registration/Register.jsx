import { Container } from "@mui/material";
import React from "react";
import FormInput from "../../components/FormInput/FormInput";

function Register() {
  return (
    <Container maxWidth='xl' sx={{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      height:'100vh',
      flexDirection:'column',
      backgroundColor:'#93BFCF',
    }} >
      <FormInput label='Username' />
      <FormInput label='Email' />
      <FormInput label='Password' />
      <FormInput label='Confirm Password' />
    </Container>
  );
}

export default Register;
