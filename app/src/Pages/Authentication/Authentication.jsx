import React from "react";
import Register from "../Register/Register";
import Home from "../Home/Home";
import ForSale from "../Home/ForSale";
import ForRent from "../Home/ForRent";
import Favorites from "../Favorites/Favorites";
import MyProfile from "../MyProfile/MyProfile";
import PersonalInformation from "../MyProfile/PersonalInformation/PersonalInformation";
import ChangePassword from "../MyProfile/ChangePassword/ChangePassword";
import NotFound from "../NotFound/NotFound";
import ROUTES from "../../Consts/Routes";
import { Navigate, Route, Routes } from "react-router-dom";
import AuthContainer from "../../Contexts/AuthContainer";
import ImmoOffices from "../Home/ImmoOffices";
import Header from "../../Components/Header/Header";
import DetailOffice from "../Detail/Offices/DetailOffice";
import Detail from "../Detail/Detail";
import Admin from "../Admin/Admin";
import Inbox from "../Inbox/Inbox";

const Authentication = () => {
  return (
    <>
      <AuthContainer>
        {" "}
        {/* if logged in */}
        <Header />
        <Routes>
          <Route path={ROUTES.home} element={<Home />} />
          <Route path={ROUTES.forSale} element={<ForSale />} />
          <Route path={ROUTES.forRent} element={<ForRent />} />
          <Route path={ROUTES.immoOffices} element={<ImmoOffices />} />
          <Route path={ROUTES.immoOffice.path} element={<DetailOffice />} />
          <Route path={ROUTES.detail.path} element={<Detail />} />
          <Route path={ROUTES.favorites} element={<Favorites />} />
          <Route path={ROUTES.myProfile} element={<MyProfile />} />
          <Route
            path={ROUTES.personalInformation}
            element={<PersonalInformation />}
          />
          <Route path={ROUTES.changePassword} element={<ChangePassword />} />
          <Route path={ROUTES.register} element={<Register />} />
          <Route path={ROUTES.notFound} element={<NotFound />} />
          <Route path={ROUTES.admin} element={<Admin />} />
          <Route path={ROUTES.inbox} element={<Inbox />} />
          <Route path="/" element={<Navigate to="/home" />} />{" "}
          {/* Navigate to home if no path is found | fallback */}
        </Routes>
      </AuthContainer>
    </>
  );
};

export default Authentication;
