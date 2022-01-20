import React, { useState } from "react";
import { MainNavBar } from "@eachbase/fragments";
import { HeaderStyled, HeaderContentStyled } from "./styles";

export const Header = ({ img, titleCont, height, content }) => {
   const [menuIsShown, setMenuIsShown] = useState(false);

   return (
      <HeaderStyled img={img} height={height}>
         <div className="header-backdrop">
            <MainNavBar className="web-view" />
            {/* <button
               style={{ width: "40px", position: "absolute", top: 0, zIndex: 999 }}
               onClick={() => setMenuIsShown((prevState) => !prevState)}
            >
               show menu
            </button> */}
            {/* {menuIsShown && <div className="menu-overlay" onClick={() => setMenuIsShown(false)} />}
            <MainNavBar className={`tablet-mobile-view ${menuIsShown ? "show" : ""}`} /> */}
            <HeaderContentStyled>
               <div className="upper-header">
                  <h6 className="background-primary">SoCal Air Systems</h6>
               </div>
               {titleCont}
               <p className="lower-header">{content}</p>
            </HeaderContentStyled>
         </div>
      </HeaderStyled>
   );
};
