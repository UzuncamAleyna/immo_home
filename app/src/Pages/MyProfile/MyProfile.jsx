import React from "react";
import TitleFavorites from "../../Components/Title/Favorites/TitleFavorites";
import ProfileButtons from "../../Components/Button/MyProfile/ProfileButtons";

const MyProfile = () => {
  return (
    <>
      <TitleFavorites>My Profile</TitleFavorites>
      <ProfileButtons />{" "}
      {/* This is the component that contains the buttons to navigate to the different pages of the MyProfile section */}
    </>
  );
};

export default MyProfile;
