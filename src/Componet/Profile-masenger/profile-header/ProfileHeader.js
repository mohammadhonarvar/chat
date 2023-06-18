import { Box, Container, Typography } from "@mui/material";
import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const ProfileHeader = () => {
  return (
    <Container
      sx={{
        width: "100%",
        height: "80px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "flex-start",
          marginLeft: "25px",
        }}
      >
        <ArrowBackIosIcon
          sx={{
            width: "24px",
            height: "24px",
            color: "#2675EC",
          }}
        />
        <Typography
          sx={{
            fontWeight: "700",
            fontSize: "20px",
            lineHeight: "24px",
            color: "#2675EC",
            marginLeft: "10px",
          }}
        >
          @AlirezaFakhar
        </Typography>
      </Box>
    </Container>
  );
};

export default ProfileHeader;
