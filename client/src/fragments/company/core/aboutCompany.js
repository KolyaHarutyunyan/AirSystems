import { Images } from "@eachbase/assets";
import React from "react";
import { AboutCompanyItem } from "./common";
import { AboutCompanyStyled } from "./styles";

export const AboutCompany = () => {
   return (
      <AboutCompanyStyled>
         <div className="about-company-box">
            <AboutCompanyItem
               aboutCompanyIcon={Images.visionIcon}
               aboutCompanyTitle={"Our Vision"}
               aboutCompanySubtitle={"What we strive for"}
               aboutCompanyDescription={
                  "“To be the leading provider of HVAC solutions in California”"
               }
            />
            <AboutCompanyItem
               aboutCompanyIcon={Images.valueIcon}
               aboutCompanyTitle={"Our Values"}
               aboutCompanySubtitle={"What we believe in"}
               aboutCompanyDescription={"Trust | Quality | Innovation | Accountability"}
            />
            <AboutCompanyItem
               aboutCompanyIcon={Images.missionIcon}
               aboutCompanyTitle={"Our Mission"}
               aboutCompanySubtitle={"What we stand for"}
               aboutCompanyDescription={
                  "Here at SoCal Air Systems, our mission is to provide HVAC services for companies and residents in the Los Angeles County region. Our focus is on perfecting the four main service branches of Heating, Ventilation, Air Conditioning and Refrigeration through experience, while translating this into quality work for our clients."
               }
            />
         </div>
      </AboutCompanyStyled>
   );
};
