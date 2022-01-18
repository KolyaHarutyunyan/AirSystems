import React from "react";
import { UserDropWrapperStyled } from "./styles";

export const UserDropWrapper = ({
  required,
  userDropClassName,
  userDropTitle,
  hasError,
  userDropErrorMsg,
  children,
}) => {
  return (
    <UserDropWrapperStyled className={userDropClassName}>
      <p className={`label ${required ? "required" : ""}`}> {userDropTitle} </p>
      {children}
      <p className="error">{hasError && userDropErrorMsg}</p>
    </UserDropWrapperStyled>
  );
};
