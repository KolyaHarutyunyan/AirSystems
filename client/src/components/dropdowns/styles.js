import styled from "styled-components";
import { Colors } from "@eachbase/utils";

export const DropdownOverlayStyled = styled.div`
   top: 0;
   left: 0;
   width: 100%;
   height: 100vh;
   position: fixed;
   z-index: 1;
`;

export const UserDropStyled = styled.div`
   max-width: 465px;
   width: 100%;
   margin-bottom: 15px;
   @media (max-width: 1280px) {
      max-width: 100%;
   }
   .label {
      margin-bottom: 8px;
      font-size: 16px;
      font-weight: 700;
      color: ${Colors.TextTertiary};
      display: flex;
      /* &.required::before {
      content: "*";
      color: ${Colors.ThemeRed};
    } */
   }
   .dropdown-box {
      position: relative;
      width: 100%;
      background-color: ${Colors.BackgroundPrimary};
      border-radius: 4px;
      border: 2px solid transparent;
      &:hover {
         & > div {
            border: 1px solid ${Colors.ThemeGreen};
         }
      }
      &.focused {
         border: 2px solid ${Colors.ThemeGreen};
         & > div {
            border: none;
         }
      }
      &.error {
         border: 2px solid ${Colors.ThemeRed};
      }
      .show-dropdown-box {
         width: 100%;
         display: flex;
         justify-content: space-between;
         align-items: center;
         cursor: pointer;
         padding: 14px 16px;
         height: 48px;
         border: 1px solid #6d829780;
         border-radius: 4px;
         .dropdown-selected {
            font-size: 16px;
            font-weight: 500;
            color: #6d829780;
            &.selected {
               color: ${Colors.TextPrimary};
            }
         }
      }
      .dropdown {
         position: absolute;
         top: 56px;
         left: 0;
         width: 465px;
         width: 100%;
         background-color: ${Colors.BackgroundPrimary};
         box-shadow: 0 0 6px #00000029;
         border-radius: 4px;
         padding: 12px 0;
         z-index: 2;
         .dropdown-options {
            transition: all 0.1s linear;
            cursor: pointer;
            padding: 14px 16px;
            display: flex;
            align-items: center;
            z-index: 3;
            &:hover {
               background-color: ${Colors.BackgroundSecondary};
            }
            .dropdown-option-title {
               font-size: 14px;
               font-weight: 500;
               color: ${Colors.TextTertiary};
               &.selected-title {
                  color: ${Colors.ThemeIndigo};
               }
            }
         }
      }
   }
   .error-text {
      font-size: 12px;
      font-weight: 500;
      color: ${Colors.ThemeRed};
      padding: 4px 16px 0;
      min-height: 17px;
   }
`;
