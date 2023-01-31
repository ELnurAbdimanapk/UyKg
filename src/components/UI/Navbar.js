import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Logo from "../../assets/kluch.png";

const Navbar = () => {
  return (
    <>
      <AppBar position="fixed"  color="success" >
        <Container fixed maxWidth="xl">
          <StyledToolBar>
            <StyledTypography>
              <StyledLogo src={Logo} alt="logo" />
            </StyledTypography>
            <StyledTypography variant="h5" component="a" href="/">
              Аренда Квартир
            </StyledTypography>
            {/* <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton> */}
            <div>
              <Button>
                <StyledButton>Sign in</StyledButton>
              </Button>
              <Button>
                <StyledButton>Sign up</StyledButton>
              </Button>
            </div>
          </StyledToolBar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;

const StyledTypography = styled(Typography)`
  text-decoration: none;
  color: white;
`;

const StyledLogo = styled("img")`
  width: 50px;
  height: 50px;
`;

const StyledToolBar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const StyledButton = styled("p")`
  color: white;
`;
