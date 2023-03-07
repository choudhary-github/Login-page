import {
  Box,
  Button,
  FormControl,
  FormLabel,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

function Update() {
  const [data, setData] = useState({
    userName: "",
    newEmail: "",
    password: "",
  });
  const [img, setImg] = useState(null);
  const { currentUser } = useContext(AuthContext);

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value })),
      console.log(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <Box>
        <Typography gutterBottom>Profile Photo</Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            style={{
              width: "100px",
              borderRadius: "50%",
            }}
            src={
              img
                ? URL.createObjectURL(img)
                : "/public/assets/DefaultProfile.jpg"
            }
            alt=""
          />
          <Button
            sx={{ marginLeft: 4 }}
            size="small"
            variant="outlined"
            component="label"
          >
            Upload
            <input
              onChange={(e) => {
                setImg(e.target.files[0]);
              }}
              hidden
              accept="image/*"
              type="file"
            />
          </Button>
        </Box>
        <FormControl sx={{ mt: 4 }}>
          <FormLabel required>Username</FormLabel>
          <TextField
            name="userName"
            onChange={handleChange}
            placeholder={currentUser.displayName}
            required
            sx={{ mb: 1 }}
            size="small"
          />
          <FormLabel required>Email</FormLabel>
          <TextField
            name="newEmail"
            onChange={handleChange}
            placeholder={currentUser.email}
            required
            sx={{ mb: 1 }}
            type={"email"}
            size="small"
          />
          <FormLabel required>Password</FormLabel>
          <TextField
            name="password"
            onChange={handleChange}
            placeholder="Enter Password"
            required
            sx={{ mb: 1 }}
            type={"password"}
            size="small"
          />
        </FormControl>
      </Box>
      <Button
        type="submit"
        size="small"
        variant="outlined"
        sx={{
          mt: 1,
        }}
      >
        Update Profile
      </Button>
    </form>
  );
}

export default Update;
