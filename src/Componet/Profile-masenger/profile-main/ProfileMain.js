import { Box, Container, Typography } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import SdStorageOutlinedIcon from "@mui/icons-material/SdStorageOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import DevicesOtherOutlinedIcon from "@mui/icons-material/DevicesOtherOutlined";

import React from "react";

import Profileuser from "./profile-user/Profileuser";
import "./profilemain.css";

const ProfileMain = () => {
  return (
    <Container
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
      }}
    >
      <Profileuser />

      <Box sx={{ marginTop: "52px" }}>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{
            color: "#202020",
            fontWeight: "700",
            fontSize: "19px",
            lineHeight: "23px",
            marginLeft: "25px",
          }}
        >
          Settings
        </Typography>
        <Box
          sx={{
            width: "270px",
            height: "240px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              marginLeft: "25px",
              marginTop: "23px",
            }}
          >
            <NotificationsNoneIcon sx={{ color: "#2D264B" }} />
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: "14px",
                lineHeight: "17px",
                color: "#404040",
                marginLeft: "21px",
              }}
            >
              Notification and sounds
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              marginLeft: "25px",
              marginTop: "30px",
            }}
          >
            <LockOutlinedIcon sx={{ color: "#2D264B" }} />
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: "14px",
                lineHeight: "17px",
                color: "#404040",
                marginLeft: "21px",
              }}
            >
              Privaty and security
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              marginLeft: "25px",
              marginTop: "30px",
            }}
          >
            <SdStorageOutlinedIcon sx={{ color: "#2D264B" }} />
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: "14px",
                lineHeight: "17px",
                color: "#404040",
                marginLeft: "21px",
              }}
            >
              Date and strongs
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              marginLeft: "25px",
              marginTop: "30px",
            }}
          >
            <TextsmsOutlinedIcon sx={{ color: "#2D264B" }} />
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: "14px",
                lineHeight: "17px",
                color: "#404040",
                marginLeft: "21px",
              }}
            >
              Date and strongs
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              marginLeft: "25px",
              marginTop: "30px",
            }}
          >
            <DevicesOtherOutlinedIcon sx={{ color: "#2D264B" }} />
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: "14px",
                lineHeight: "17px",
                color: "#404040",
                marginLeft: "21px",
              }}
            >
              Devices
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ProfileMain;
