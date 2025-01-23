"use client";

import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Navbar: React.FC = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
      <Toolbar sx={{ display: "fiex", justifyContent: "center"}}>
        <Typography variant="h3" component="div" sx={{ textAlign: "center" }}>
          User Profile Management System
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
