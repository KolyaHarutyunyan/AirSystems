import React from "react";
import { useAnimation } from "@eachbase/utils";
import { FreeQuotesStyled } from "./styles";

export const FreeQuotes = () => {
   const animation = useAnimation(600);
   const animationStyle = animation ? "fadeInUp" : "";

   return (
      <FreeQuotesStyled className={animationStyle}>
         <div className="free-quotes__title-cont">
            <h4 className="free-quotes__title theme-indigo">
               SoCal Air provides{" "}
               <span className="theme-green">free quotes and estimates</span> on
               commercial, residential and industrial projects
            </h4>
         </div>
         <div className="free-quotes__background-img" />
         <div className="free-quotes__absolute-cont background-primary">
            <h6 className="free-quotes__absolute-cont__title text-primary">
               Certified Technicians
            </h6>
            <p className="free-quotes__absolute-cont__descr text-tertiary">
               We value every relationship we have created and continue to
               create in our business. Every customer no matter the size of the
               job is treated with the same respect and attention.
            </p>
         </div>
      </FreeQuotesStyled>
   );
};
