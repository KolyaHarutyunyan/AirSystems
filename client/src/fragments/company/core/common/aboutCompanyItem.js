import React from "react";
import { AboutCompanyItemStyled } from "./styles";

export const AboutCompanyItem = ({
   itemClassName,
   aboutCompanyIcon,
   aboutCompanyTitle,
   aboutCompanyTitleDivider,
   aboutCompanySubtitle,
   aboutCompanyDescription,
}) => {
   return (
      <AboutCompanyItemStyled icon={aboutCompanyIcon} className={itemClassName}>
         <div className="about-company-item-box">
            <h2 className="about-company-item-title">{aboutCompanyTitle}</h2>
            {aboutCompanyTitleDivider}
            <h6 className="about-company-item-subtitle">
               {aboutCompanySubtitle}
            </h6>
            <p className="about-company-item-description">
               {aboutCompanyDescription}
            </p>
         </div>
      </AboutCompanyItemStyled>
   );
};
