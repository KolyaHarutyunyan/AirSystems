import React from "react";
import { NavLink } from "react-router-dom";
import { Routes, useAnimation } from "@eachbase/utils";
import { Main, TitleDivider } from "@eachbase/components";
import { PrivacyPolicyContainerStyled } from "./styles";
import { Images } from "@eachbase/assets";
import { privacyPolicyParagraphs } from "./core";

export const PrivacyPolicyFragment = () => {
   const animation = useAnimation();

   return (
      <Main
         content={
            <PrivacyPolicyContainerStyled>
               <div className="logo-box">
                  <NavLink to={Routes.home.path}>
                     <img src={Images.logoGreen} alt="logo green" />
                  </NavLink>
               </div>
               <div className="privacy-policy-box">
                  <div className="privacy-policy-title-box">
                     <h2 className="privacy-policy-title">
                        {"Privacy Policy"}
                     </h2>
                     <TitleDivider lineAnimation={animation} />
                  </div>
                  {!!privacyPolicyParagraphs.length && (
                     <div className="privacy-policy-info-box">
                        {privacyPolicyParagraphs.map((paragraph, index) => (
                           <div
                              key={index}
                              className="privacy-policy-description"
                           >
                              {paragraph}
                           </div>
                        ))}
                     </div>
                  )}
               </div>
            </PrivacyPolicyContainerStyled>
         }
      />
   );
};
