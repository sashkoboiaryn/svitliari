import React from "react";
import { Container, Box } from "@mui/system";
import { Button, Input, Autocomplete, TextField } from "@mui/material";
import Stack from "@mui/material/Stack";

const Header = () => {
  return (
    <>
      <div className="header_container">
        <Box className="header_items_container">
          <Box className="header_left_items">
            <Box className="header_logo">
              <img
                src="https://www.freepnglogos.com/uploads/camera-logo-png/camera-outline-icon-27.png"
                alt="logo"
              />
            </Box>
            <Button variant="text">Головна</Button>
            <Button variant="text">Майстри</Button>
            <Button variant="text">Про Нас</Button>
          </Box>
          <Box className="header_right_items">
            <TextField
              id="filled-search"
              placeholder="Search"
              type="search"
              variant="outlined"
            />
            <Button variant="outlined">Увійти</Button>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default Header;
