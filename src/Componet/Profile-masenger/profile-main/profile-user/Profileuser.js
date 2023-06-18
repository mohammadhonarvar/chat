import { Container, Typography, Box } from "@mui/material";
import React, { useState } from "react";
import { data } from "../data";
import "../profilemain.css";

const Profileuser = () => {
  const [profiledata, setProfiledata] = useState(data);
  return (
    <Container sx={{ width: "100%", height: "45%" }}>
      {profiledata.map((item) => {
        return (
          <Box
            key={item.id}
            sx={{
              width: "100%",
              height: "95px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
            }}
          >
            <img src={item.image} alt={item.name} className="profile-img" />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                alignItems: "flex-start",
                justifyContent: "center",
              }}
            >
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{
                  color: "#202020",
                  fontWeight: "700",
                  fontSize: "23px",
                  lineHeight: "28px",
                }}
              >
                {item.name}
              </Typography>
              <Typography
                gutterBottom
                variant="h7"
                component="div"
                sx={{
                  color: "#A8A8A8",
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "19px",
                }}
              >
                {item.number}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                width: "270px",
                height: "269px",
                marginTop: "35px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  height: "100%",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "75px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{
                      color: "#202020",
                      fontWeight: "700",
                      fontSize: "20px",
                      lineHeight: "24px",
                    }}
                  >
                    Account
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{
                      color: "#292929",
                      fontWeight: "600",
                      fontSize: "16px",
                      lineHeight: "19px",
                    }}
                  >
                    {item.number}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{
                      color: "#929292",
                      fontWeight: "500",
                      fontSize: "13px",
                      lineHeight: "15px",
                    }}
                  >
                    Tap to change phone number
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    height: "39px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{
                      color: "#404040",
                      fontWeight: "700",
                      fontSize: "14px",
                      lineHeight: "17px",
                    }}
                  >
                    {item.name}
                  </Typography>

                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{
                      color: "#929292",
                      fontWeight: "500",
                      fontSize: "13px",
                      lineHeight: "15px",
                    }}
                  >
                    Username
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    height: "39px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{
                      color: "#404040",
                      fontWeight: "700",
                      fontSize: "14px",
                      lineHeight: "17px",
                    }}
                  >
                    {item.bio}
                  </Typography>

                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{
                      color: "#929292",
                      fontWeight: "500",
                      fontSize: "13px",
                      lineHeight: "15px",
                    }}
                  >
                    bio
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        );
      })}
    </Container>
  );
};

export default Profileuser;
