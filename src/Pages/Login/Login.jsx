import {
  Box,
  Container,
  Button,
  Stack,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import { styled } from "@mui/material/styles";
import { indigo } from "@mui/material/colors";
import { loginSchema } from "../../schema/validationSchema";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        Email: "",
        Password: "",
      },
      validationSchema: loginSchema,
      onSubmit: (data) => {
        console.log(data);
      },
    });
  const FbButton = styled(Button)(({ theme }) => ({
    backgroundColor: indigo[700],
    width: "100%",
    height: "50px",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: indigo[800],
    },
  }));
  const GButton = styled(Button)(({ theme }) => ({
    backgroundColor: "black",
    width: "100%",
    height: "50px",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "#212121",
    },
  }));
  console.log(errors);
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
            Login
          </Typography>
          <TextField
            onBlur={handleBlur}
            helperText={touched.Email && errors.Email}
            error={touched.Email && !!errors.Email}
            onChange={handleChange}
            type="email"
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
              marginBottom: "5px",
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword((value) => !value)}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            sx={{ mt: 1, height: 50, fontWeight: 700, fontSize: 15 }}
            type="submit"
            variant="contained"
            onClick={() => {
              dispatch({ type: "LOGIN_START" });
              signInWithEmailAndPassword(auth, values.Email, values.Password)
                .then((userCredential) => {
                  // Signed in
                  const user = userCredential.user;
                  dispatch({ type: "LOGIN_SUCCESS", payload: user });
                  console.log(user);
                  navigate("/");
                  // ...
                })
                .catch((error) => {
                  dispatch({ type: "LOGIN_FAILURE" });
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  console.log("errorCode -> ", errorCode);
                });
            }}
          >
            Login
          </Button>
        </form>
        <Typography mt={1}>
          Don't have an account?{" "}
          <Link
            style={{
              textDecoration: "none",
            }}
            to="/register"
          >
            Sign Up
          </Link>
        </Typography>
        <Box
          sx={{
            position: "relative",
            m: "15px 0",
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
        <Stack mt={1.5} spacing={1.5}>
          <FbButton href="#" variant="contained" sx={{}} to="#">
            <img className="image" src="/assets/facebook.png" />{" "}
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
              src="/assets/google.png"
            />{" "}
            <Typography>Login With Google</Typography>
          </GButton>
        </Stack>
      </Box>
    </Container>
  );
}
import { AuthContext } from "../../context/AuthContext";

export default Login;
