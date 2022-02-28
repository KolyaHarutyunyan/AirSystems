import React, { useState } from "react";
import { Colors, getCardClassName, getLimitedVal } from "@eachbase/utils";
import { BenefitCardStyled } from "./styles";
import { ViewMoreButton } from "@eachbase/components";

export const BenefitCard = ({ ben, cardClassName, index }) => {
   const { logo, title, description } = ben;

   const [readMore, setReadMore] = useState(false);

   const limitedDescription = getLimitedVal(description, 110);
   const descriptionDisplay = readMore ? description : limitedDescription;

   return (
      <BenefitCardStyled
         className={`${getCardClassName(index)} ${cardClassName}`}
      >
         <div className="logo-container">
            <img className="logo" src={logo} alt="logo white" />
         </div>
         <h6 className="title theme-indigo">{title}</h6>
         <span className={`desciption ${readMore ? "display" : ""}`}>
            {descriptionDisplay}
         </span>
         {limitedDescription.length > 110 && (
            <ViewMoreButton
               butnClassName={`read-butn ${readMore ? "padding" : ""}`}
               onView={() => setReadMore((prevState) => !prevState)}
               butnViewingText={`${readMore ? "Read Less" : "Read More"}`}
            />
         )}
      </BenefitCardStyled>
   );
};
