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
import { useNavigate, useParams } from "react-router-dom";
import { Data } from "../data";
import Navbar from "../UI/Navbar";

const DescriptionCard = () => {
    const navigate = useNavigate();
  const { id } = useParams();
  const [house, setHouse] = useState(true);

  useEffect(() => {
    setHouse(Data.find((h) => h.id === Number(id)));
  }, [id]);
  console.log(house);
  return (
    <>
      <Navbar />
      {Data.map((el) => {
        if (el.id === Number(id)) {
          return (
            <>
              <StyledContainer key={id} onClick={() => navigate(`/cardhouse/${house.id}`)} >
                <StyledCard>
                  <StyledCardMedia>
                    <CardMedia component="img" image={el.image} alt="house" />
                  </StyledCardMedia>
                </StyledCard>
                <CardContent>
                  <Typography>{el.district}</Typography>
                  <Typography>${el.price}</Typography>
                  <Typography>Opisaniye</Typography>
                </CardContent>
                <CardActions>
                  <IconButton>
                    <FavoriteIcon />
                  </IconButton>
                </CardActions>
              </StyledContainer>
            </>
          );
        }
      })}
    </>
  );
};

export default DescriptionCard;

const StyledContainer = styled("div")`
  margin: auto;
  margin-top: 100px;
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
