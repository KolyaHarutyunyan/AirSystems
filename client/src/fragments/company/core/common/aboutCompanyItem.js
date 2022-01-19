import React from "react";
import { TitleDivider } from "../../../home/main/core/titleDivider";
import { AboutCompanyItemStyled } from "./styles";

export const AboutCompanyItem = ({
   aboutCompanyIcon,
   aboutCompanyTitle,
   aboutCompanySubtitle,
   aboutCompanyDescription,
}) => {
   return (
      <AboutCompanyItemStyled icon={aboutCompanyIcon}>
         <div className="about-company-item-box">
            <h2 className="about-company-item-title">{aboutCompanyTitle}</h2>
            <TitleDivider />
            <h6 className="about-company-item-subtitle">{aboutCompanySubtitle}</h6>
            <p className="about-company-item-description">{aboutCompanyDescription}</p>
         </div>
      </AboutCompanyItemStyled>
   );
};
