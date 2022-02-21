import React from "react";
import { getCardClassName } from "@eachbase/utils";
import { BenefitCardStyled } from "./styles";

export const BenefitCard = ({ ben, cardClassName, index }) => {
   const { logo, title, description } = ben;

   return (
      <BenefitCardStyled
         className={`${getCardClassName(index)} ${cardClassName}`}
      >
         <div className="logo-container">
            <img className="logo" src={logo} alt="logo white" />
         </div>
         <h6 className="title theme-indigo">{title}</h6>
         <div className="desciption">{description}</div>
      </BenefitCardStyled>
   );
};
