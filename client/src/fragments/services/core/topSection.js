import React from "react";
import { TitleDivider } from "@eachbase/components";
import { useAnimation } from "@eachbase/utils";
import { TopSectionStyled } from "./styles";

export const TopSection = () => {
   const animation = useAnimation();

   return (
      <TopSectionStyled>
         <h2 className="title-cont">
            <div className="title">
               <span className="theme-green">Services</span>
               <span className="theme-indigo">we provide</span>
            </div>
            <TitleDivider lineAnimation={animation} />
         </h2>
         <p className="descr text-secondary">
            We take pride in having a multidisciplinary team of technicians and
            experts which allows us to provide a range of services to our
            customers. Everything you would need from small repairs to large
            commercial projects.
         </p>
      </TopSectionStyled>
   );
};
