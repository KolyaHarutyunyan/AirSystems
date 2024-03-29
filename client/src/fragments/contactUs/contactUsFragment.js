import React, { useRef, useEffect, useContext } from "react";
import GoogleMapReact from "google-map-react";
import {
   Header,
   HorizontalDivider,
   Main,
   TitleDivider,
} from "@eachbase/components";
import { EstimateRequest, QuickMessage } from "./core";
import { ContactUsContainerStyled, mapUi } from "./styles";
import { Images } from "@eachbase/assets";
import {
   Colors,
   useAnimation,
   useWidth,
   ScrollToContext,
} from "@eachbase/utils";

const _GOOGLE_MAP_REACT_API_KEY = {
   key: "AIzaSyCWYz3vb8vWqc4-NllBUJKYIUOWmRMQ9W0",
};
const _COMPANY_LOCATION = { lat: 34.02635910147282, lng: -118.45729272891555 };
const _CUSTOM_MAP_OPTIONS = {
   fullscreenControl: false,
   styles: mapUi,
};

const CustomMarker = ({ children }) => <>{children}</>;

export const ContactUsFragment = () => {
   const width = useWidth();
   const animation = useAnimation();

   const { scrollTo, handleScrollTo } = useContext(ScrollToContext);
   const estimateRequestRef = useRef(null);

   useEffect(() => {
      if (scrollTo === "REQUEST_AN_ESTIMATE") {
         estimateRequestRef.current.scrollIntoView({ behavior: "smooth" });
      }

      return () => handleScrollTo("");
   }, [scrollTo]);

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
            minHeight={
               width >= 1280 ? "420px" : width >= 768 ? "400px" : "276px"
            }
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
                        <TitleDivider lineAnimation={animation} />
                     </div>
                     <p className="connect-description">
                        Feel free to reach out with any questions regarding your
                        project. We are always glad to provide a free estimates
                        for projects of all sizes. Whether you have a small
                        repair or need a quote for a commercial project you can
                        count on our team of professionals to get the job done!
                     </p>
                  </section>
                  <section className="connect-map">
                     <GoogleMapReact
                        bootstrapURLKeys={_GOOGLE_MAP_REACT_API_KEY}
                        defaultZoom={12}
                        defaultCenter={_COMPANY_LOCATION}
                        options={_CUSTOM_MAP_OPTIONS}
                     >
                        <CustomMarker
                           lat={_COMPANY_LOCATION.lat}
                           lng={_COMPANY_LOCATION.lng}
                        >
                           <div className="marker-pin">
                              <img src={Images.locationIcon} alt="" />
                           </div>
                        </CustomMarker>
                     </GoogleMapReact>
                  </section>
                  <QuickMessage />
                  <EstimateRequest ref={estimateRequestRef} />
               </ContactUsContainerStyled>
            }
         />
      </>
   );
};
