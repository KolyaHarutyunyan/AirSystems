import React from "react";
import {
   Header,
   HorizontalDivider,
   Main,
   TitleDivider,
} from "@eachbase/components";
import { MeetOurFounder, AboutCompany } from "./core";
import { CompanyContainerStyled } from "./styles";
import { Colors, useAnimation, useWidth } from "@eachbase/utils";
import { Images } from "@eachbase/assets";

export const CompanyFragment = () => {
   const width = useWidth();
   const animation = useAnimation(300);

   return (
      <>
         <Header
            img={
               width >= 1280
                  ? Images.companyHeroWeb
                  : width >= 768
                  ? Images.companyHeroTablet
                  : Images.companyHeroMobile
            }
            minHeight={
               width >= 1280 ? "561px" : width >= 768 ? "400px" : "276px"
            }
            bgPosition={"center"}
            titleCont={
               <h1 className="main-title main-title-abs">
                  <div className="title-cont">
                     <HorizontalDivider
                        length={width >= 768 ? "80px" : "48px"}
                        bb={`2px solid ${Colors.ThemeGreen}`}
                     />
                     <span className="background-primary">Company</span>
                  </div>
               </h1>
            }
         />
         <Main
            content={
               <CompanyContainerStyled>
                  <section className="who-we-are-box">
                     <div className="who-we-are-title-box">
                        <h2 className="who-we-are-title">
                           <em>Who</em> we are
                        </h2>
                        <TitleDivider lineAnimation={animation} />
                     </div>
                     <div className="who-we-are-info-box">
                        <h6 className="who-we-are-subtitle">
                           Serving the Los Angeles community for over 35 years
                        </h6>
                        <p className="who-we-are-description">
                           We are a group of professional HVAC technicians and
                           project managers that strive to provide the highest
                           quality work at a fair price. Being local and serving
                           the local community, we have become adept in
                           recognizing issues and providing solutions within a
                           short timeframe.{" "}
                        </p>
                        <p className="who-we-are-description">
                           SoCal Air Systems is still family owned and operated
                           so you can expect a personal touch to every project
                           as well as customer service that cannot be matched by
                           large corporations.
                        </p>
                     </div>
                  </section>
                  <MeetOurFounder />
                  <AboutCompany />
               </CompanyContainerStyled>
            }
         />
      </>
   );
};
