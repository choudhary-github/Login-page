import {
  ExitToAppOutlined,
  FileCopyOutlined,
  GroupOutlined,
  HearingOutlined,
  HomeOutlined,
  List,
  MovieCreationOutlined,
  PhotoSizeSelectActualOutlined,
  ScheduleOutlined,
  Settings,
  ShoppingBasketOutlined,
} from "@mui/icons-material";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import MenuLink from "../MenuLink/Menulink";

const Sidebar = () => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };
  return (
    <Box width="250px" sx={{ display: { xs: "none", md:'block' }, }}>
      <MenuLink icon={<HomeOutlined />} text="Homepage" />
      <MenuLink icon={<List />} text="Lists" />
      <MenuLink icon={<ShoppingBasketOutlined />} text="Products" />
      <MenuLink icon={<GroupOutlined />} text="Groups" />
      <MenuLink icon={<FileCopyOutlined />} text="Pages" />
      <MenuLink icon={<PhotoSizeSelectActualOutlined />} text="Photos" />
      <MenuLink icon={<MovieCreationOutlined />} text="Videos" />
      <MenuLink icon={<ScheduleOutlined />} text="Schedule" />
      <MenuLink icon={<HearingOutlined />} text="Wishlist" />
      <MenuLink icon={<Settings />} text="Settings" />
      <span onClick={handleLogout}>
        <MenuLink icon={<ExitToAppOutlined />} text="Logout" />
      </span>
    </Box>
  );
};

export default Sidebar;
