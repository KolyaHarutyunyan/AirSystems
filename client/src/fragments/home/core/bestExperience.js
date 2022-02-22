import React from "react";
import { AppSizes, Benefits, useAnimation, useWidth } from "@eachbase/utils";
import { BenefitCard } from "@eachbase/components";
import { BestExperienceStyled } from "./styles";

export const BestExperience = () => {
   const width = useWidth();
   const mobile = parseInt(AppSizes.mobile);
   const animation = useAnimation(width <= mobile ? 0 : 40);
   const animationStyle = animation ? "fadeInUp" : "";

   return (
      <BestExperienceStyled>
         <h2 className="best-exp-title theme-indigo">
            How we serve you the best experience
         </h2>
         <div className={`benefits-contaner`}>
            {Benefits.map((ben, index) => (
               <BenefitCard
                  key={ben.title}
                  index={index}
                  ben={ben}
                  cardClassName={animationStyle}
               />
            ))}
         </div>
      </BestExperienceStyled>
   );
};
