import {
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React from "react";
import styled from "styled-components";

const CardItem = ({ image, district, price, id, onClick }) => {
  return (
    <div>
      <StyledCard sx={{ maxWidth: 290 }} key={id} onClick={onClick}>
        <StyledCardActionArea>
          <StyledCardMedia
            component="img"
            height="290"
            image={image}
            alt="house"
          />
        </StyledCardActionArea>
      </StyledCard>
      <StyledContent>
        <div>
          <Typography variant="h6" ml={-2} mt={-1} >
            {district}
          </Typography>
          <Typography variant="subtitle1" ml={-2}>
            ${price} ночь
          </Typography>
        </div>

        <CardActions sx={{ marginTop: "-12px", marginRight: "-15px" }}>
          <IconButton>
            <FavoriteIcon />
          </IconButton>
        </CardActions>
      </StyledContent>
    </div>
  );
};

export default CardItem;

const StyledCardMedia = styled(CardMedia)`
  border-radius: 10px;
`;

const StyledCardActionArea = styled(CardActionArea)`
  border-radius: 20px;
`;

const StyledCard = styled("div")`
  border-radius: 10px;
  margin: 30px 0 20px 0;
  max-width: 280px;
  max-height: 270px;
`;

const StyledContent = styled(CardContent)`
  display: flex;
  justify-content: space-between;
`;
