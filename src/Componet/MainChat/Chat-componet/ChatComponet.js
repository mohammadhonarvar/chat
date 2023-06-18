import { Card, Container, Typography, CardContent } from "@mui/material";
import React, { useState } from "react";
import { data } from "./data";
import "./chatcomponet.css";

const ChatComponet = () => {
  const [chat, setchat] = useState(data);

  return (
    <Container sx={{ marginTop: "25px" }}>
      {chat.map((item) => {
        return (
          <Card sx={{ maxWidth: 390, height: 100, boxShadow: "none" }}>
            <div className="massagebox" key={item.id}>
              <img src={item.image} alt={item.name} />
              <CardContent className="content">
                <div className="col-1">
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
                      color: "#2675ec",
                      fontWeight: "500",
                      fontSize: "16px",
                      lineHeight: "19px",
                    }}
                  >
                    {item.massage}
                  </Typography>
                </div>
                <div className="col-2">
                  <Typography
                    gutterBottom
                    variant="h7"
                    sx={{
                      color: "#AEAEAE",
                      fontWeight: "500",
                      fontSize: "16px",
                      lineHeight: "19px",
                    }}
                  >
                    {item.time}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h7"
                    sx={{
                      background: "#2675ec",
                      mt: 1,
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "500",
                      fontSize: "16px",
                      lineHeight: "19px",
                    }}
                  >
                    {item.numbermassega}
                  </Typography>
                </div>
              </CardContent>
            </div>
          </Card>
        );
      })}
    </Container>
  );
};

export default ChatComponet;
