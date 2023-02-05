import {
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
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
                    <Typography variant="h3" ml={3}>
                      {el.district}
                    </Typography>
                  </CardContent>
                  <StyledCard>
                    <div>
                      <CardMedia
                        component="img"
                        image={el.otherImages[0]}
                        alt="house"
                        sx={{
                          maxWidth: 450,
                          height: 450,
                          borderTopLeftRadius: 20,
                          borderBottomLeftRadius: 20,
                        }}
                      />
                    </div>
                    <div>
                      <CardMedia
                        component="img"
                        image={el.otherImages[1]}
                        alt="house"
                        sx={{ maxWidth: 220, height: 220 }}
                      />
                      <CardMedia
                        component="img"
                        image={el.otherImages[1]}
                        alt="house"
                        sx={{ maxWidth: 220, height: 220, marginTop: 1.2 }}
                      />
                    </div>
                    <div>
                      <CardMedia
                        component="img"
                        image={el.otherImages[1]}
                        alt="house"
                        sx={{
                          maxWidth: 220,
                          height: 220,
                          borderTopRightRadius: 20,
                        }}
                      />
                      <CardMedia
                        component="img"
                        image={el.otherImages[1]}
                        alt="house"
                        sx={{
                          maxWidth: 220,
                          height: 220,
                          borderBottomRightRadius: 20,
                          marginTop: 1.2,
                        }}
                      />
                    </div>
                  </StyledCard>

                  <CardContent>
                    <Typography variant="h5" ml={-2} mt={5}>
                      Отдельная комната в жилье типа остров бхозяин Отдельная
                      комната в жилье типа остров бхозяин
                    </Typography>
                    <div style={{display:"flex",justifyContent:"space-between",width:300}}>
                      <Typography variant="p" ml={-2}> *2 спальня</Typography>
                      <Typography variant="p" ml={-2}> *2 спальня</Typography>
                      <Typography variant="p" ml={-2}> *2 спальня</Typography>
                    </div>
                  </CardContent>
                </>
              );
            }
          })}
        </div>
      </StyledContainer>
    </>
  );
};

export default HouseCard;

const StyledContainer = styled(Container)`
  margin: auto;
  margin-top: 100px;
  display: flex;
  justify-content: space-around;
`;

const StyledCard = styled("div")`
  border-radius: 10px;
  width: 900px;
  height: 450px;
  text-align: center;
  margin: auto;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  margin-right: 220px;
`;


