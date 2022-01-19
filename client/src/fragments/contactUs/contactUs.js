import React from "react";
import { TitleDivider } from "../home/main/core/titleDivider";
import { EstimateRequest, QuickMessage } from "./core";
import { ContactUsFragmentStyled } from "./styles";

export const ContactUsFragment = () => {
   return (
      <ContactUsFragmentStyled>
         <div className="contact-us-container">
            <div className="connect-box">
               <div className="connect-title-box">
                  <h2 className="connect-title">
                     Let's <em>connect</em>
                  </h2>
                  <TitleDivider />
               </div>
               <p className="connect-description">
                  Feel free to reach out with any questions regarding your project. We are always
                  glad to provide a free estimates for projects of all sizes. Whether you have a
                  small repair or need a quote for a commercial project you can count on our team of
                  professionals to get the job done!
               </p>
            </div>
            <div className="connect-map">Map here</div>
            <QuickMessage />
            <EstimateRequest />
         </div>
      </ContactUsFragmentStyled>
   );
};
