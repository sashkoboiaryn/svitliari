import React from "react";
import { Container, Box } from "@mui/system";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";

const Header = () => {
  return (
    <>
      <Container
        className="header_container"
        sx={{
          height: "100hv",
          backgroundColor: "#ccc",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Stack spacing={2} direction="row">
            <Box>LOGO</Box>
            <Button variant="text">Головна</Button>
            <Button variant="text">Майстри</Button>
            <Button variant="text">Про Нас</Button>
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default Header;
