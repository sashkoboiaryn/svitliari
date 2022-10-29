import React from "react";
import { Container, Box } from "@mui/system";
import { Button, Input, Autocomplete, TextField } from "@mui/material";
import Stack from "@mui/material/Stack";

const Header = () => {
  return (
    <>
      <div className="header_container">
        <Box className="header_items_container">
          <Box className="header_logo">LOGO</Box>
          {/* <Stack className="header_buttons_box" spacing={2} direction="row"> */}
          <Button variant="text">Головна</Button>
          <Button variant="text">Майстри</Button>
          <Button variant="text">Про Нас</Button>
          {/* </Stack> */}
          <input className="header_input" />
          <Button variant="text">Увійти</Button>
        </Box>
      </div>
    </>
  );
};

export default Header;
