import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Data } from "../data";
import CardItem from "./CardItem";

const Card = () => {
  const navigate = useNavigate();
  return (
    <StyledContainer>
      {Data.map((el) => {
        return (
          <>
            <CardItem
              image={el.image}
              price={el.price}
              district={el.district}
              id={el.id}
              onClick={() => navigate(`/card/${el.id}`)}
            />
          </>
        );
      })}
    </StyledContainer>
  );
};

export default Card;

const StyledContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 100px;
`;
