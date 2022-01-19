import React, { useState } from "react";
import { Images } from "@eachbase/assets";
import { DropdownOverlayStyled, UserDropStyled } from "./styles";

export const UserInputsDropdown = ({
   required,
   dropdownOptions = [],
   onPass,
   selected,
   userDropTitle,
   dropdownTitle,
   dropdownError,
   userDropErrorMsg,
}) => {
   const [dropdownIsShown, setDropdownIsShown] = useState(false);

   const chooseOptionHandler = (option) => {
      onPass(option);
      setDropdownIsShown(false);
   };

   return (
      <>
         {dropdownIsShown && <DropdownOverlayStyled onClick={() => setDropdownIsShown(false)} />}
         <UserDropStyled>
            <p className={`label ${required ? "required" : ""}`}> {userDropTitle} </p>
            <div
               className={`dropdown-box ${dropdownIsShown ? "focused" : ""} ${
                  dropdownError ? "error" : ""
               }`}
            >
               <div
                  className="show-dropdown-box"
                  onClick={() => setDropdownIsShown((prevState) => !prevState)}
               >
                  <h6 className={`dropdown-selected ${selected ? "selected" : ""}`}>
                     {selected ? selected : dropdownTitle}
                  </h6>
                  <img
                     src={dropdownIsShown ? Images.dropdownArrowBlack : Images.dropdownArrow}
                     alt=""
                  />
               </div>
               {dropdownIsShown && (
                  <div className="dropdown">
                     {dropdownOptions.map((option, index) => {
                        return (
                           <div
                              key={index}
                              className="dropdown-options"
                              onClick={() => chooseOptionHandler(option)}
                           >
                              <span
                                 className={`dropdown-option-title ${
                                    option === selected ? "selected-title" : ""
                                 }`}
                              >
                                 {option}
                              </span>
                           </div>
                        );
                     })}
                  </div>
               )}
            </div>
            <p className="error-text">{dropdownError && userDropErrorMsg}</p>
         </UserDropStyled>
      </>
   );
};
