import React from "react";
import { Images } from "@eachbase/assets";
import { AboutCompanyItem } from "./common";
import { AboutCompanyStyled } from "./styles";
import { TitleDivider } from "@eachbase/components";
import { useWidth, AppSizes } from "@eachbase/utils";

export const AboutCompany = () => {
   const width = useWidth();
   const mobileView = parseInt(AppSizes.mobile);

   return (
      <AboutCompanyStyled>
         <div className="about-company-box">
            <div className="about-company-box__first">
               <AboutCompanyItem
                  aboutCompanyIcon={Images.visionIcon}
                  aboutCompanyTitle={"Our Vision"}
                  aboutCompanyTitleDivider={
                     <TitleDivider
                        onlyWeb={false}
                        length={`${width < mobileView ? "173px" : "269px"}`}
                     />
                  }
                  aboutCompanySubtitle={"What we strive for"}
                  aboutCompanyDescription={
                     "“To be the leading provider of HVAC solutions in California”"
                  }
               />
               <AboutCompanyItem
                  aboutCompanyIcon={Images.valueIcon}
                  aboutCompanyTitle={"Our Values"}
                  aboutCompanyTitleDivider={
                     <TitleDivider
                        onlyWeb={false}
                        length={`${width < mobileView ? "177px" : "269px"}`}
                     />
                  }
                  aboutCompanySubtitle={"What we believe in"}
                  aboutCompanyDescription={"Trust | Quality | Innovation | Accountability"}
               />
            </div>
            <AboutCompanyItem
               aboutCompanyIcon={Images.missionIcon}
               aboutCompanyTitle={"Our Mission"}
               aboutCompanyTitleDivider={
                  <TitleDivider
                     onlyWeb={false}
                     length={`${width < mobileView ? "189px" : "288px"}`}
                  />
               }
               aboutCompanySubtitle={"What we stand for"}
               aboutCompanyDescription={
                  "Here at SoCal Air Systems, our mission is to provide HVAC services for companies and residents in the Los Angeles County region. Our focus is on perfecting the four main service branches of Heating, Ventilation, Air Conditioning and Refrigeration through experience, while translating this into quality work for our clients."
               }
            />
         </div>
      </AboutCompanyStyled>
   );
};
