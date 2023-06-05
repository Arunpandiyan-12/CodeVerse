import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Switch from "@mui/material/Switch";

const Navbar = ({ toggleMode, darkMode }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const loggedIn = JSON.parse(localStorage.getItem("authToken"));

  //handle logout
  const handleLogout = async () => {
    try {
      await axios.post("/api/v1/auth/logout");
      localStorage.removeItem("authToken");
      toast.success("logout successfully ");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(to right, ${
          theme.palette.mode === "dark"
            ? theme.palette.grey[800]
            : theme.palette.primary.main
        }, ${
          theme.palette.mode === "dark"
            ? theme.palette.grey[900]
            : theme.palette.primary.light
        })`,
        width: "100%",
        color: "#87CEEB",
        p: "1rem 6%",
        textAlign: "center",
        boxShadow: 3,
        mb: 2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
        [theme.breakpoints.up("sm")]: {
          flexDirection: "row",
        },
      }}
    >
      <Typography variant="h1" fontWeight="bold">
        MultiToolMaster
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
        <Switch
          checked={darkMode}
          onChange={toggleMode}
          name="toggleMode"
          color="secondary"
        />
        {loggedIn ? (
          <>
            <NavLink to="/homepage" p={1} color="inherit">
              Home
            </NavLink>
            <NavLink
              to="/login"
              onClick={handleLogout}
              p={1}
              color="inherit"
            >
              Logout
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to="/register" p={1} color="inherit">
              Sign Up
            </NavLink>
            <NavLink to="/login" p={1} color="inherit">
              Sign In
            </NavLink>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Navbar;
