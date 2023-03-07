import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Container, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Main from "../../components/Main/Main";
import Rightbar from "../../components/rightbar/Rightbar";
import Update from "../../components/Update/Update";
// import { Auth } from "firebase/auth";

function Home() {
  // console.log(currentUser);
  // const user = Auth.currentUser;
  // if (user !== null) {
  //   // The user object has basic properties such as display name, email, etc.
  //   const displayName = user.displayName;
  //   const email = user.email;
  //   const photoURL = user.photoURL;
  //   const emailVerified = user.emailVerified;

  //   // The user's ID, unique to the Firebase project. Do NOT use
  //   // this value to authenticate with your backend server, if
  //   // you have one. Use User.getToken() instead.
  //   const uid = user.uid;
  // }
  return (
    <>
      <Navbar />
      <Container sx={{ mt: 3, display: "flex" }} maxWidth="xl">
        <Sidebar />
        <Main />
        <Rightbar />
      </Container>
    </>
  );
}

export default Home;
