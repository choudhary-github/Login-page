import {Box, TextField } from "@mui/material";
import React from "react";

function FormInput(props) {
  return (
    <Box sx={{
      backgroundColor:'#6096B4'
    }}>
      <TextField label={props.label} />
    </Box>
  );
}

export default FormInput;
