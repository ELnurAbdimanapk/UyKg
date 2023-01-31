import {
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React from "react";
import styled from "styled-components";

const CardItem = ({ image, district, price ,id, onClick}) => {
  return (
      <StyledCard sx={{ maxWidth: 290 }} key={id} onClick ={onClick}>
        <CardActionArea>
          <StyledCardMedia component="img" height="290"  image={image} alt="house" />
        </CardActionArea>
        <CardContent>
          <Typography>{district}</Typography>
          <Typography>${price}</Typography>
        </CardContent>
        <CardActions>
          <IconButton>
            <FavoriteIcon />
          </IconButton>
        </CardActions>
      </StyledCard>
  );
};

export default CardItem;


const StyledCardMedia = styled(CardMedia)`
border-radius: 20px;
` 

const StyledCard = styled(Card) `
border-radius: 0;
margin: 30px 0 20px 0 ;
`