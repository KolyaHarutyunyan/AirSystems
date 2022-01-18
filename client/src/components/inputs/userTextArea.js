import React from "react";
import { UserTextAreaStyled } from "./styles";

export const UserTextArea = ({
  textAreaClassName,
  textAreaName,
  textAreaValue,
  onTextAreaChange,
  textAreaPlaceholder,
}) => {
  return (
    <UserTextAreaStyled
      className={textAreaClassName}
      name={textAreaName}
      value={textAreaValue}
      onChange={onTextAreaChange}
      placeholder={textAreaPlaceholder}
    />
  );
};
