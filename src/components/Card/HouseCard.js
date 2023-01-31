import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useParams } from "react-router-dom";
import { Data } from "../data";
import Navbar from "../UI/Navbar";

const HouseCard = () => {
  const { id } = useParams();
  const [house, setHouse] = useState(true);

  useEffect(() => {
    setHouse(Data.find((h) => h.id === Number(id)));
  }, [id]);
  console.log(house);
  return (
    <>
      <Navbar />
      <StyledContainer key={id}>
        <div>
          {Data.map((el) => {
            if (el.id === Number(id)) {
              return (
                <>
                  <CardContent>
                    <Typography variant="h6">{el.district}</Typography>
                    <Typography variant="h5">${el.price}</Typography>
                    <StyledTypography>Opisaniye</StyledTypography>
                  </CardContent>
                </>
              );
            }
          })}
        </div>
        <div>
          <CardActions>
            <IconButton>
              <FavoriteIcon />
            </IconButton>
          </CardActions>
          {Array.isArray(house.otherImages) &&
            house.otherImages.map((el) => {
              console.log(el);
              return (
                <StyledCard>
                  <StyledCardMedia>
                    <CardMedia component="img" image={el.house3} alt="house" />
                  </StyledCardMedia>
                </StyledCard>
              );
            })}
        </div>
      </StyledContainer>
    </>
  );
};

export default HouseCard;

const StyledContainer = styled("div")`
  margin: auto;
  margin-top: 100px;
  display: flex;
  justify-content: space-around;
`;

const StyledCardMedia = styled(CardActionArea)`
  background-color: red;
  width: 100%;
`;

const StyledCard = styled(Card)`
  width: 800px;
  height: 500px;
  text-align: center;
  margin: auto;
  margin-top: 10px;
  border-radius: 20px;
`;

const StyledTypography = styled(Typography)`
  width: 500px;
  height: 500px;
  margin-top: 1000px;
`;
