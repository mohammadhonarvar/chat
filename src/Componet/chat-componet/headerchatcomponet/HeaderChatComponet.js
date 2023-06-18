import { Container, Box, Typography } from "@mui/material";
import React, { useState } from "react";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import { data } from "../../Profile-masenger/profile-main/data";
import "./headerchatcomponet.css";

const HeaderChatComponet = () => {
  const [headerchat, setHeaderchat] = useState(data);
  return (
    <Container sx={{ width: "100%", height: "100px", display: "flex" }}>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {headerchat.map((item) => {
          return (
            <Container
              sx={{
                display: "flex",
                alignItems: "center",

                height: "100%",
              }}
            >
              <img src={item.image} alt={item.name} className="img-chat" />
              <Box sx={{ marginLeft: "22px" }}>
                <Typography
                  sx={{
                    fontWeight: "700",
                    fontSize: "20px",
                    lineHeight: "24px",
                    color: "#202020",
                  }}
                >
                  {item.name}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "19px",
                    color: "#2675EC",
                  }}
                >
                  Online
                </Typography>
              </Box>
            </Container>
          );
        })}

        <WidgetsOutlinedIcon sx={{ color: "#2675EC" }} />
      </Box>
    </Container>
  );
};

export default HeaderChatComponet;
