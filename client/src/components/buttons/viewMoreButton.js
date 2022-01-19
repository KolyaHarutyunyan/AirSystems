import React from "react";
import { ViewMoreButtonStyled } from "./styles";

export const ViewMoreButton = ({ butnClassName, onView, butnViewingText }) => {
   return (
      <ViewMoreButtonStyled
         type="button"
         className={`view-more-butn ${butnClassName}`}
         onClick={onView}
      >
         {butnViewingText}
      </ViewMoreButtonStyled>
   );
};
