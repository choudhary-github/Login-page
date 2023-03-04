import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import "./styles.css";
import { indigo } from "@mui/material/colors";
import { validationSchema } from "../../schema/validationSchema";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const FbButton = styled(Button)(({ theme }) => ({
  backgroundColor: indigo[700],
  textTransform: "capitalize",
  width: "100%",
  height: "50px",
  "&:hover": {
    backgroundColor: indigo[800],
  },
}));
const GButton = styled(Button)(({ theme }) => ({
  textTransform: "capitalize",
  backgroundColor: "black",
  width: "100%",
  height: "50px",
  "&:hover": {
    backgroundColor: "#212121",
  },
}));

function FormInput() {
  const [showPassword, setShowPassword] = useState(false);
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        Username: "",
        Email: "",
        Password: "",
        ConfirmPassword: "",
      },
      validationSchema: validationSchema,
      onSubmit: (data) => {
        console.log(data);
      },
    });
  console.log(errors);
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
          onBlur={handleBlur}
          helperText={touched.Username && errors.Username}
          error={touched.Username && !!errors.Username}
          onChange={handleChange}
          type="text"
          value={values.Username}
          name="Username"
          required
          label="Username"
          sx={{
            marginBottom: "15px",
          }}
        />
        <TextField
          helperText={touched.Email && errors.Email}
          error={touched.Email && !!errors.Email}
          onChange={handleChange}
          onBlur={handleBlur}
          type="Email"
          value={values.Email}
          name="Email"
          required
          label="Email"
          sx={{
            marginBottom: "15px",
          }}
        />
        <TextField
          fullWidth
          helperText={touched.Password && errors.Password}
          error={touched.Password && !!errors.Password}
          onBlur={handleBlur}
          onChange={handleChange}
          type={showPassword ? "text" : "password"}
          value={values.Password}
          name="Password"
          required
          label="Password"
          sx={{
            marginBottom: "15px",
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword((value) => !value)}>
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          helperText={touched.ConfirmPassword && errors.ConfirmPassword}
          error={touched.ConfirmPassword && !!errors.ConfirmPassword}
          onBlur={handleBlur}
          onChange={handleChange}
          type="Password"
          value={values.ConfirmPassword}
          name="ConfirmPassword"
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
          onClick={() => {
            createUserWithEmailAndPassword(auth, values.Email, values.Password)
              .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // ...
                console.log(user);
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                console.log( errorMessage);
              });
          }}
        >
          Register
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
      <Box
        sx={{
          position: "relative",
          mb: 2,
          mt: 1.5,
        }}
      >
        <hr />
        <Typography
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#fff",
            padding: "0 10px",
          }}
        >
          Or
        </Typography>
      </Box>
      <Stack mt={1} spacing={1.5}>
        <FbButton href="#" variant="contained" sx={{}} to="#">
          <img className="image" src="../../../public/assets/facebook.png" />{" "}
          <Typography
            display={"flex"}
            alignItems={"center"}
            justifyContent="center"
          >
            Login With Facebook
          </Typography>
        </FbButton>
        <GButton href="#" variant="contained">
          <img
            style={{ height: "35px" }}
            className="image"
            src="../../../public/assets/google.png"
          />{" "}
          <Typography>Login With Google</Typography>
        </GButton>
      </Stack>
    </Box>
  );
}

export default FormInput;
