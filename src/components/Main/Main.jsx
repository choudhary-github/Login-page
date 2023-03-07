import { Box, Container, Typography } from "@mui/material";
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Update from "../Update/Update";

function Main() {
  const { currentUser } = useContext(AuthContext);

  return (
    <Container
      style={{
        display: "flex",
        flexGrow: "1",
        flexDirection: "column",
        marginLeft:5
      }}
    >
      <Typography variant="h5" fontWeight={600}>
        Edit your Email
      </Typography>
      <Box ml={5} height='30%'>
        <Typography mt={5}>
          Email Address:{" "}
          <span style={{ fontSize: 18, fontWeight: 500 }}>
            {currentUser?.email}
          </span>
        </Typography>
      </Box>
      <Box ml={6}>
        <Update />
      </Box>
    </Container>
  );
}

export default Main;
