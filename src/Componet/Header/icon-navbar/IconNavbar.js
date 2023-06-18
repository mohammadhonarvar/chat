import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import { ButtonBase, Container } from "@mui/material";
import "./Navbar.css";
import SideBar from "../Sidebar-componet/SideBar";
const IconNavbar = () => {
  return (
    <Container sx={{ display: "flex", alignItems: "center", height: "90px" }}>
      <div className="iconbar-container">
        <h1>Telegram</h1>
        <div className="iconbar">
          <ButtonBase>
            <AddIcon />
          </ButtonBase>
          <ButtonBase>
            <SearchIcon />
          </ButtonBase>
          <ButtonBase onClick={SideBar()}>
            <FormatAlignLeftIcon />
          </ButtonBase>
        </div>
      </div>
    </Container>
  );
};

export default IconNavbar;
