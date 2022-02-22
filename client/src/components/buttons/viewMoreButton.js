import React from "react";
import { ViewMoreButtonStyled } from "./styles";

export const ViewMoreButton = ({
   butnClassName,
   onView,
   butnViewingText,
   butnStyle,
}) => {
   return (
      <ViewMoreButtonStyled
         type="button"
         style={butnStyle}
         className={`view-more-butn ${butnClassName}`}
         onClick={onView}
      >
         {butnViewingText}
      </ViewMoreButtonStyled>
   );
};
