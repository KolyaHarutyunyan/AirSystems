import React from "react";
import { UserTextArea } from "./userTextArea";
import { UserInputStyled } from "./styles";

export const UserInput = ({
   required,
   inputLabel,
   inputType,
   inputName,
   inputValue,
   onInputChange,
   inputPlaceholder,
   inputError,
   charCounterIsShown,
   charLimit = "50",
   isTextArea,
}) => {
   return (
      <UserInputStyled>
         <label className="user-input-label">
            <p className={required ? "required" : ""}> {inputLabel} </p>
            {isTextArea ? (
               <UserTextArea
                  textAreaClassName={`${inputError ? "error" : ""}`}
                  textAreaName={inputName}
                  textAreaValue={inputValue}
                  onTextAreaChange={onInputChange}
                  textAreaPlaceholder={inputPlaceholder}
               />
            ) : (
               <input
                  type={inputType ? inputType : "text"}
                  className={`${inputError ? "error" : ""}`}
                  name={inputName}
                  value={inputValue}
                  onChange={onInputChange}
                  onWheel={(evt) => inputType === "number" && evt.target.blur()}
                  autoComplete="off"
                  placeholder={inputPlaceholder}
               />
            )}
         </label>
         <div className="user-input-error-box">
            <p className="user-input-error-text">{inputError}</p>
            {charCounterIsShown && (
               <p className="user-input-char-counter">{`${inputValue.length}/${charLimit}`}</p>
            )}
         </div>
      </UserInputStyled>
   );
};
