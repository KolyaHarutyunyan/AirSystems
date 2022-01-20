import React from "react";
import { TitleDivider } from "@eachbase/components";
import { MeetOurFounder, AboutCompany } from "./core";
import { CompanyFragmentStyled } from "./styles";

export const CompanyFragment = () => {
   return (
      <CompanyFragmentStyled>
         <div className="company-container">
            <div className="who-we-are-box">
               <div className="who-we-are-title-box">
                  <h2 className="who-we-are-title">
                     <em>Who</em> we are
                  </h2>
                  <TitleDivider />
               </div>
               <div className="who-we-are-info-box">
                  <h6 className="who-we-are-subtitle">
                     Serving the Los Angeles community for over 35 years
                  </h6>
                  <p className="who-we-are-description">
                     We are a group of professional HVAC technicians and project managers that
                     strive to provide the highest quality work at a fair price. Being local and
                     serving the local community, we have become adept in recognizing issues and
                     providing solutions within a short timeframe.{" "}
                  </p>
                  <p className="who-we-are-description">
                     SoCal Air is still family owned and operated so you can expect a personal touch
                     to every project as well as customer service that cannot be matched by large
                     corporations.
                  </p>
               </div>
            </div>
            <MeetOurFounder />
            <AboutCompany />
         </div>
      </CompanyFragmentStyled>
   );
};
