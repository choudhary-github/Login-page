import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";

function FormInput() {
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (data) => {
      console.log(data);
    },
  });
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        padding: 4,
        borderRadius: 2,
        textAlign: "center",
        width: 380,
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            marginBottom: "20px",
            fontSize: 25,
            fontWeight: 700,
          }}
        >
          Register
        </Typography>
        <TextField
          onChange={handleChange}
          type="text"
          value={values.username}
          name="username"
          required
          label="Username"
          sx={{
            marginBottom: "15px",
          }}
        />
        <TextField
          onChange={handleChange}
          type="email"
          value={values.email}
          name="email"
          required
          label="Email"
          sx={{
            marginBottom: "15px",
          }}
        />
        <TextField
          onChange={handleChange}
          type="password"
          value={values.password}
          name="password"
          required
          label="Password"
          sx={{
            marginBottom: "15px",
          }}
        />
        <TextField
          onChange={handleChange}
          type="password"
          value={values.confirmPassword}
          name="confirmPassword"
          required
          label="Confirm Password"
          sx={{
            marginBottom: "15px",
          }}
        />
        <Button
          sx={{ height: 50, fontWeight: 700, fontSize: 15 }}
          type="submit"
          variant="contained"
        >
          Submit
        </Button>
      </form>
      <Typography mt={1}>
        Already have an account?{" "}
        <Link
          style={{
            textDecoration: "none",
          }}
          to="/login"
        >
          Sign In
        </Link>
      </Typography>
      <Typography
        display={"flex"}
        alignItems={"center"}
        justifyContent="center"
      >
        {" "}
        <FacebookRoundedIcon />
        Login With Facebook
      </Typography>
      <Typography>Login With Google</Typography>
    </Box>
  );
}

export default FormInput;
