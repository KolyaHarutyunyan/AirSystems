import React, { useState } from "react";
import { getLimitedVal } from "@eachbase/utils";
import { StarsContainer } from "./starsContainer";
import { ListingsCardItemStyled } from "./styles";
import { ViewMoreButton } from "@eachbase/components";

export const ListingsCardItem = ({ rate, review, author, cardClassName }) => {
   const [readMore, setReadMore] = useState(false);
   const reviewDisplay = readMore ? review : getLimitedVal(review, 80);

   return (
      <ListingsCardItemStyled>
         <StarsContainer className={`${cardClassName}`} rate={rate} />
         <p
            className="comment-cont text-tertiary"
            style={!readMore ? { display: "inline" } : {}}
         >
            <span className={`comment ${cardClassName}`}>{reviewDisplay}</span>
         </p>
         <ViewMoreButton
            butnStyle={
               readMore
                  ? { margin: "8px 0px 16px", padding: "0px" }
                  : { marginBottom: "12px" }
            }
            onView={() => setReadMore((prevState) => !prevState)}
            butnViewingText={`${readMore ? "Read Less" : "Read More"}`}
         />

         <p className={`author-cont text-primary ${cardClassName}`}>{author}</p>
      </ListingsCardItemStyled>
   );
};
