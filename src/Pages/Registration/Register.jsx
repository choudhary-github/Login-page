import { Button, Container, TextField } from "@mui/material";
import React from "react";
import FormInput from "../../components/FormInput/FormInput";

function Register() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#93BFCF",
      }}
    >
      <FormInput />
    </Container>
  );
}

export default Register;
