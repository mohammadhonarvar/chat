import { Container } from "@mui/material";
import React from "react";
import ProfileHeader from "./profile-header/ProfileHeader";
import ProfileMain from "./profile-main/ProfileMain";
// import ProfileSetting from "./profile-setting/ProfileSetting";

const ProfileMasenger = () => {
  return (
    <Container sx={{ width: "100%", height: "100vh" }}>
      <ProfileHeader />
      <ProfileMain />
    </Container>
  );
};

export default ProfileMasenger;
