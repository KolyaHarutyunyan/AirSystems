import React from "react";
import { Routes } from "@eachbase/utils/routes";
import { RouteLink, SendButton } from "@eachbase/components";
import { MainNavbarStyled } from "./styles";

export const MainNavBar = ({ className }) => {
   return (
      <MainNavbarStyled className={className}>
         {Object.values(Routes).map(({ title, path }) => (
            <RouteLink key={path} title={title} where={path}></RouteLink>
         ))}
         <div className="navbar-button-cont">
            <SendButton
               butnClassName=""
               butnType={"button"}
               butnSendingText={"Request an Appointment"}
               onClickButn={() => {}}
            />
         </div>
      </MainNavbarStyled>
   );
};
