import React, { useState } from "react";
import { Benefits } from "@eachbase/utils";
import { BenefitCard } from "@eachbase/components";
import { BestExperienceStyled } from "./styles";

export const BestExperience = () => {
   const [animation, setAnimation] = useState(false);
   window.addEventListener("scroll", () => setAnimation(window.scrollY >= 50));

   const animationStyle = animation
      ? "animate__animated animate__fadeInUp"
      : "";

   return (
      <BestExperienceStyled>
         <h2 className="best-exp-title theme-indigo">
            How we serve you the best experience
         </h2>
         <div className={`benefits-contaner ${animationStyle}`}>
            {Benefits.map((ben) => (
               <BenefitCard key={ben.title} ben={ben} />
            ))}
         </div>
      </BestExperienceStyled>
   );
};
