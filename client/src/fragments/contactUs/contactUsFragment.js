import React from "react";
import { Header, HorizontalDivider, Main, TitleDivider } from "@eachbase/components";
import { EstimateRequest, QuickMessage } from "./core";
import { ContactUsContainerStyled } from "./styles";
import { Images } from "@eachbase/assets";
import { Colors, useWidth } from "@eachbase/utils";
import GoogleMapsReact from "./core/maps";

export const ContactUsFragment = () => {
   const width = useWidth();

   return (
      <>
         <Header
            img={
               width >= 1280
                  ? Images.contactusHeroWeb
                  : width >= 768
                  ? Images.contactusHeroTablet
                  : Images.contactusHeroMobile
            }
            minHeight={width >= 1280 ? "420px" : width >= 768 ? "400px" : "276px"}
            bgPosition={"right"}
            titleCont={
               <h1 className="main-title main-title-abs">
                  <div className="title-cont">
                     <HorizontalDivider
                        length={width >= 768 ? "80px" : "48px"}
                        bb={`2px solid ${Colors.ThemeGreen}`}
                     />
                     <span className="bg-primary">Contact Us</span>
                  </div>
               </h1>
            }
         />
         <Main
            content={
               <ContactUsContainerStyled>
                  <section className="connect-box">
                     <div className="connect-title-box">
                        <h2 className="connect-title">
                           Let's <em>connect</em>
                        </h2>
                        <TitleDivider />
                     </div>
                     <p className="connect-description">
                        Feel free to reach out with any questions regarding your project. We are
                        always glad to provide a free estimates for projects of all sizes. Whether
                        you have a small repair or need a quote for a commercial project you can
                        count on our team of professionals to get the job done!
                     </p>
                  </section>
                  <section className="connect-map">
                     <GoogleMapsReact />
                  </section>
                  <QuickMessage />
                  <EstimateRequest />
               </ContactUsContainerStyled>
            }
         />
      </>
   );
};
