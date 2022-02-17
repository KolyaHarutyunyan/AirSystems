import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router";
import { Routes } from "@eachbase/utils/routes";
import { RouteLink, SendButton } from "@eachbase/components";
import { MainNavbarStyled, NavStyled } from "./styles";

export const MainNavBar = ({ className }) => {
   const history = useHistory();
   const [colorChanged, setColorChanged] = useState(false);
   const [menuIsShown, setMenuIsShown] = useState(false);

   const manageDocumentScroll = () =>
      menuIsShown
         ? (document.body.style.overflow = "hidden")
         : (document.body.style.overflow = "auto");
   useEffect(manageDocumentScroll, [menuIsShown]);

   const changeNavbarColor = () => setColorChanged(window.scrollY >= 80);
   window.addEventListener("scroll", changeNavbarColor);

   const path = window.location.pathname;
   const greenBG =
      path === "/termsAndConditions" ||
      path === "/privacyPolicy" ||
      path === "/404";

   const greenBGClassName = colorChanged || greenBG ? "colorChange" : "";
   const activeClassName = menuIsShown ? "active" : "";

   return (
      <>
         <MainNavbarStyled className={className}>
            {Object.values(Routes).map(({ title, path }) => (
               <RouteLink key={path} title={title} where={path} />
            ))}
            <div className="navbar-button-cont">
               <SendButton
                  butnType={"button"}
                  butnSendingText={"Request an Estimate"}
                  onClickButn={() => history.push("/contactUs")}
               />
            </div>
         </MainNavbarStyled>
         <NavStyled>
            <div
               className={`hamburger ${greenBGClassName} ${activeClassName}`}
               onClick={() => setMenuIsShown((prevState) => !prevState)}
            >
               <div className={`hamburger-lines  ${activeClassName}`}>
                  <span className={`line line1 ${activeClassName}`} />
                  <span className={`line line2 ${activeClassName}`} />
                  <span className={`line line3 ${activeClassName}`} />
               </div>
            </div>
            <div
               className={`navbar-backdrop ${activeClassName}`}
               onClick={() => setMenuIsShown(false)}
            />
            <div className={`menu-items-box ${activeClassName}`}>
               <ul className="menu-items-list">
                  {Object.values(Routes).map(({ title, path }) => (
                     <li key={path}>
                        <NavLink
                           exact
                           to={path}
                           activeClassName="active"
                           onClick={() => setMenuIsShown(false)}
                        >
                           <h5>{title}</h5>
                        </NavLink>
                     </li>
                  ))}
               </ul>
               <SendButton
                  butnType={"button"}
                  butnSendingText={"Request an Estimate"}
                  onClickButn={() => {
                     history.push("/contactUs");
                     setMenuIsShown(false);
                  }}
               />
            </div>
         </NavStyled>
      </>
   );
};
