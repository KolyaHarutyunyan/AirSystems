import React from "react";
import { SendButtonStyled } from "./styles";
import { CircularProgress } from "@mui/material";

export const SendButton = ({
   butnClassName,
   butnType,
   butnSendingText,
   butnDisabled,
   onClickButn,
   loader = false,
}) => {
   return (
      <SendButtonStyled
         type={butnType || "button"}
         className={butnClassName}
         disabled={butnDisabled}
         onClick={onClickButn}
      >
         {loader ? <CircularProgress size={17} color={"inherit"} /> : butnSendingText}
      </SendButtonStyled>
   );
};
