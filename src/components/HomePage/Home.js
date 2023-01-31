import React from "react";
import styled from "styled-components";
import Card from "../Card/Card";
import Navbar from "../UI/Navbar";

const Home = () => {
  return <StyledContainer>
    <Navbar/>
    <Card/>
  </StyledContainer>;
};

export default Home;

const StyledContainer = styled("div")`
  max-width: 1845px;
  margin: auto;
`;
