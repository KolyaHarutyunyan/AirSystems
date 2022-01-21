import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HeaderStyled, HeaderContentStyled, NavStyled } from "./styles";
import { MainNavBar } from "@eachbase/fragments";
import { SendButton } from "@eachbase/components";

export const Header = ({ img, titleCont, content }) => {
   const [menuIsShown, setMenuIsShown] = useState(false);

   return (
      <HeaderStyled img={img}>
         <div className="header-backdrop">
            <MainNavBar className="web-view" />
            <NavStyled>
               <div
                  onS
                  className={`hamburger-lines ${menuIsShown ? "active" : ""}`}
                  onClick={() => setMenuIsShown((prevState) => !prevState)}
               >
                  <span className={`line line1 ${menuIsShown ? "active" : ""}`} />
                  <span className={`line line2 ${menuIsShown ? "active" : ""}`} />
                  <span className={`line line3 ${menuIsShown ? "active" : ""}`} />
               </div>
               <div
                  className={`navbar-backdrop ${menuIsShown ? "active" : ""}`}
                  onClick={() => setMenuIsShown(false)}
               />
               <div className={`menu-items-box ${menuIsShown ? "active" : ""}`}>
                  <ul className="menu-items-list">
                     <li>
                        <NavLink to="/home">
                           <h3>Home</h3>
                        </NavLink>
                     </li>
                     <li>
                        <NavLink to="/services">
                           <h3>Services</h3>
                        </NavLink>
                     </li>
                     <li>
                        <NavLink to="/contactUs">
                           <h3>Contact Us</h3>
                        </NavLink>
                     </li>
                     <li>
                        <NavLink to="/company">
                           <h3>Company</h3>
                        </NavLink>
                     </li>
                  </ul>
                  <SendButton
                     butnClassName={""}
                     butnType={"button"}
                     butnSendingText={"Request an Appointment"}
                     onClickButn={() => {}}
                  />
               </div>
            </NavStyled>
            <HeaderContentStyled>
               <div className="upper-header">
                  <h6 className="background-primary">SoCal Air Systems</h6>
               </div>
               {titleCont}
               <div className="lower-header">{content}</div>
            </HeaderContentStyled>
         </div>
      </HeaderStyled>
   );
};
