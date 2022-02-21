import React from "react";
import {
   useWidth,
   AppSizes,
   getCardClassName,
   useAnimation,
} from "@eachbase/utils";
import { ChessImgSection } from "./chessImgSection";
import { BigCardStyled } from "./styles";

export const BigCard = ({ service, reverse, index }) => {
   const width = useWidth();
   const { title, subtitle, text, list, serviceImage, bgColor, icon } = service;
   const mobile = parseInt(AppSizes.mobile);

   const firstAnimation = useAnimation(50);
   const secondAnimation = useAnimation(800);
   const thirdAnimation = useAnimation(1600);
   const fourthAnimation = useAnimation(2200);

   const animation =
      index === 0
         ? firstAnimation
         : index === 1
         ? secondAnimation
         : index === 2
         ? thirdAnimation
         : fourthAnimation;
   const animationStyle = animation ? "fadeInUp" : "";

   return (
      <BigCardStyled bg={bgColor} reverse={reverse} className={animationStyle}>
         <div className="info-section">
            <h2 className={`Heating card-caption-cont theme-indigo`}>
               <span className="card-caption">{title}</span>
               <img className="card-icon" src={icon} alt={`Heating`} />
            </h2>
            <div className="descr-cont">
               <h6 className="descr-title text-primary">{subtitle}</h6>
               <p className="descr-p text-tertiary">{text}</p>
            </div>
            {width <= mobile && (
               <ChessImgSection
                  bg={bgColor}
                  img={serviceImage}
                  reverse={reverse}
               />
            )}
            <ul className="card-list">
               {list.map((text) => (
                  <li key={text} className="card-list-item text-tertiary">
                     {text}
                  </li>
               ))}
            </ul>
         </div>
         {width > mobile && (
            <ChessImgSection
               bg={bgColor}
               img={serviceImage}
               reverse={reverse}
            />
         )}
      </BigCardStyled>
   );
};
