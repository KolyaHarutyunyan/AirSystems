import React, { useState } from "react";
import {
   AppSizes,
   getLimitedVal,
   useAnimation,
   useWidth,
} from "@eachbase/utils";
import { StarsContainer } from "./starsContainer";
import { ListingsCardItemStyled } from "./styles";

export const ListingsCardItem = ({ rate, review, author, cardClassName }) => {
   const [readMore, setReadMore] = useState(false);
   const reviewDisplay = readMore ? review : getLimitedVal(review, 80);

   return (
      <ListingsCardItemStyled>
         <StarsContainer className={`${cardClassName}`} rate={rate} />
         <p className="comment-cont text-tertiary">
            <span className={`comment ${cardClassName}`}>{reviewDisplay}</span>
         </p>
         <div
            onClick={() => setReadMore((prevState) => !prevState)}
            className={`read-more theme-light-blue ${cardClassName}`}
         >
            {readMore ? "Read Less" : "Read More"}
         </div>

         <p className={`author-cont text-primary ${cardClassName}`}>{author}</p>
      </ListingsCardItemStyled>
   );
};
