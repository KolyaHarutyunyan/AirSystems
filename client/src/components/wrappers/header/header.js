import React from "react";
import { NavLink } from "react-router-dom";
import { Routes } from "@eachbase/utils";
import { Images } from "@eachbase/assets";
import { HeaderStyled, HeaderContentStyled } from "./styles";

export const Header = ({ img, minHeight, bgPosition, titleCont, content }) => {
   return (
      <HeaderStyled img={img} bgPosition={bgPosition}>
         <div className="header-backdrop">
            <HeaderContentStyled minHeight={minHeight}>
               <div className="upper-header">
                  <NavLink to={Routes.home.path}>
                     <img src={Images.logoWhite} alt="logo" />
                  </NavLink>
               </div>
               {titleCont}
               <div className="lower-header">{content}</div>
            </HeaderContentStyled>
         </div>
      </HeaderStyled>
   );
};
