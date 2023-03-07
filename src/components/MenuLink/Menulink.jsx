import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function MenuLink({ icon, text }) {
  const { currentUser } = useContext(AuthContext);
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        mb: 2.7,
      }}
    >
      <Typography display={"flex"} alignSelf={"center"}>
        {icon}
      </Typography>
      <Typography
        sx={{
          display: { sm: "none", md: "flex" },
          fontSize: 19,
          ml: 2,
          cursor: "pointer",
        }}
      >
        {" "}
        {text}{" "}
      </Typography>

      <Typography style={{ marginLeft: 5, textTransform: "capitalize", cursor:'pointer' }}>
        {text === "Logout" &&
          `( ${currentUser ? currentUser.displayName : ""} )`}
      </Typography>
    </Box>
  );
}

export default MenuLink;
