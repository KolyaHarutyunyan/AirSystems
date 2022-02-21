import React from "react";
import {
   AppSizes,
   getCardClassName,
   useAnimation,
   useWidth,
} from "@eachbase/utils";
import { Images } from "@eachbase/assets";
import { TitleDivider } from "@eachbase/components";
import { MainCarousel } from "./mainCarousel";
import { PartnersStyled } from "./styles";

export const Partners = () => {
   const width = useWidth();

   const tablet = parseInt(AppSizes.tablet);
   const mobile = parseInt(AppSizes.mobile);
   const scrollHeight =
      width > mobile && width <= tablet ? 4600 : width <= mobile ? 5000 : 3700;

   const animation = useAnimation(scrollHeight);
   const animationStyle = animation ? "fadeInUp" : "";

   const partnersToShow =
      width >= 370 && width < 470
         ? 2
         : width >= 470 && width < 660
         ? 2.5
         : width >= 660 && width < 768
         ? 3.5
         : width >= 768 && width < 890
         ? 4
         : width >= 890 && width < 1100
         ? 5
         : width >= 1100 && width < 1280
         ? 6
         : width >= 1280
         ? 6
         : 1;

   return (
      <PartnersStyled>
         <h2 className="partners__title-cont">
            <div className="partners__title">
               <span className="theme-green">Partners</span>{" "}
               <span className="theme-indigo">we work with</span>
            </div>
            <TitleDivider lineAnimation={animation} />
         </h2>
         <p className="partners__descr text-secondary">
            We keep track of industry trends and make sure you are receiving the
            highest quality products with the latest technologies
         </p>
         <div className="partners__logos-cont">
            <MainCarousel itemsToShow={partnersToShow}>
               {Object.entries(Images.PartnersLogos).map(
                  ([title, src], index) => (
                     <div
                        key={title}
                        className={`partner-logo-wrapper ${getCardClassName(
                           index
                        )} ${animationStyle}`}
                     >
                        <img className="partner-logo" src={src} alt={title} />
                     </div>
                  )
               )}
            </MainCarousel>
         </div>
      </PartnersStyled>
   );
};
