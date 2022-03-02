import React from "react";
import { NavLink } from "react-router-dom";
import { Main, TitleDivider } from "@eachbase/components";
import { Routes, useAnimation } from "@eachbase/utils";
import { TermsAndCondsContainerStyled } from "./styles";
import { Images } from "@eachbase/assets";
import { termsAndCondsParagraphs } from "./core";

export const TermsAndCondsFragment = () => {
   const animation = useAnimation();

   return (
      <Main
         content={
            <TermsAndCondsContainerStyled>
               <div className="logo-box">
                  <NavLink to={Routes.home.path}>
                     <img src={Images.logoGreen} alt="logo green" />
                  </NavLink>
               </div>
               <div className="terms-and-conds-box">
                  <div className="terms-and-conds-title-box">
                     <h2 className="terms-and-conds-title">
                        {"Terms & Conditions"}
                     </h2>
                     <TitleDivider lineAnimation={animation} />
                  </div>
                  {!!termsAndCondsParagraphs.length && (
                     <div className="terms-and-conds-info-box">
                        {termsAndCondsParagraphs.map((paragraph, index) => (
                           <p
                              key={index}
                              className="terms-and-conds-description"
                           >
                              {paragraph}
                           </p>
                        ))}
                     </div>
                  )}
               </div>
            </TermsAndCondsContainerStyled>
         }
      />
   );
};
