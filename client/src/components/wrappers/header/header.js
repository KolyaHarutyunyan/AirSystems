import React from "react";
import { HeaderStyled, HeaderContentStyled } from "./styles";

export const Header = ({ img, minHeight, bgPosition, titleCont, content }) => {
   return (
      <HeaderStyled img={img} bgPosition={bgPosition}>
         <div className="header-backdrop">
            <HeaderContentStyled minHeight={minHeight}>
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
