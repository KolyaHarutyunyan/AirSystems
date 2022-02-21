import React from "react";
import { useWidth, AppSizes, Devices, getCardClassName } from "@eachbase/utils";
import { ProvidingServiceCardStyled } from "./styles";

export const ProvidingServiceCard = ({ service, cardClassName, index }) => {
   const width = useWidth();
   const { imageWeb, imageTablet, imageMobile, title, list } = service;

   return (
      <ProvidingServiceCardStyled
         className={`${getCardClassName(index)} ${cardClassName}`}
      >
         <img
            className="service-card-img"
            src={
               width <= AppSizes.mobile
                  ? imageMobile
                  : width <= Devices.tablet
                  ? imageTablet
                  : imageWeb
            }
            alt={title}
         />
         <h4 className="service-card-title">{title}</h4>
         <ul className="service-card-list">
            {list.map((text) => (
               <li key={text} className="service-card-list-item text-tertiary">
                  {text}
               </li>
            ))}
         </ul>
      </ProvidingServiceCardStyled>
   );
};
