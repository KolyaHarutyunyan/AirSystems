import React, { useState } from "react";
import { Images } from "@eachbase/assets";
import { DropdownOverlayStyled, DropdownBoxStyled } from "./styles";

export const UserInputsDropdown = ({
  dropdownOptions = [],
  onPass,
  selected,
  dropdownTitle,
  dropdownError,
}) => {
  const [dropdownIsShown, setDropdownIsShown] = useState(false);

  const chooseOptionHandler = (option) => {
    onPass(option);
    setDropdownIsShown(false);
  };

  return (
    <>
      {/* {dropdownIsShown && (
        <DropdownOverlayStyled
          // className="dropdown-overlay"
          onClick={() => setDropdownIsShown(false)}
        />
      )} */}
      <DropdownBoxStyled
        className={`${dropdownIsShown ? "focused" : ""} ${
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
            src={
              dropdownIsShown ? Images.dropdownArrowBlack : Images.dropdownArrow
            }
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
      </DropdownBoxStyled>
    </>
  );
};
