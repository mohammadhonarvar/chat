import { Box, Container } from "@mui/material";
import React, { useState } from "react";
import HeaderChatComponet from "./headerchatcomponet/HeaderChatComponet";
import { data } from "./data";

const ChatComponet = () => {
  const [pm, setPm] = useState(data);
  return (
    <Container sx={{ width: "100%", height: "100vh", overflow: "hidden" }}>
      <HeaderChatComponet />
      <Box
        sx={{
          width: "100%",
          height: "70%",
          display: "flex",
          marginTop: "58px",
        }}
      >
        {pm.map((item) => {
          return (
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "space-evenly",
              }}
            >
              <Box></Box>
            </Box>
          );
        })}
      </Box>
    </Container>
  );
};

export default ChatComponet;
