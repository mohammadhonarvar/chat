import React, { useState } from "react";
import { data } from "./data";
import { Button, Container, Stack } from "@mui/material";

import "./tittleheader.css";
const TitleHeader = () => {
  const [title, setTitle] = useState(data);

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        marginLeft: "20px",
        overflow: "hidden",
      }}
    >
      {/* <div className="title-container">  */}
      <Stack
        direction={{ xs: "row", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        {title.map((item) => {
          return (
            <Button
              variant="contained"
              key={item.id}
              sx={{
                background: "none",
                color: "black",
                boxShadow: "none",
                borderRadius: "20px",
              }}
              className="btn"
            >
              {item.title}
            </Button>
          );
        })}
      </Stack>
      {/* </div> */}
    </Container>
  );
};

export default TitleHeader;
