import { Colors, Devices } from "@eachbase/utils";
import styled from "styled-components";

export const UserInputStyled = styled.div`
   position: relative;
   max-width: 465px;
   width: 100%;
   margin-bottom: 15px;
   @media ${Devices.tablet} {
      max-width: 100%;
   }
   .user-input-label {
      & > p {
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
      & > input {
         outline: none;
         width: 100%;
         padding: 14px 16px;
         border-radius: 4px;
         font-size: 16px;
         font-weight: 500;
         color: ${Colors.TextSecondary};
         background-color: ${Colors.BackgroundPrimary};
         border: 1px solid #6d829780;
         &:hover {
            border: 1px solid ${Colors.ThemeGreen};
         }
         &:focus {
            border: 2px solid ${Colors.ThemeGreen};
         }
         &.error {
            border: 2px solid ${Colors.ThemeRed};
         }
         &.subscribe {
            height: 48px;
         }
         &.subscribe:hover {
            border: 1px solid ${Colors.ThemeGreen};
         }
         &.subscribe:focus {
            border: 1px solid ${Colors.ThemeGreen};
         }
         &.subscribe.error {
            border: 1px solid ${Colors.ThemeRed};
         }
      }
   }
   .user-input-error-box {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 4px 16px 0;
      min-height: 17px;
      & > p {
         font-size: 12px;
         font-weight: 500;
      }
      .user-input-error-text {
         color: ${Colors.ThemeRed};
      }
      .user-input-char-counter {
         color: ${Colors.TextSecondary};
      }
   }
`;

export const UserTextAreaStyled = styled.textarea`
   outline: none;
   resize: none;
   width: 465px;
   height: 156px;
   overflow-y: auto;
   background-color: ${Colors.BackgroundPrimary};
   border: 1px solid #6d829780;
   border-radius: 4px;
   padding: 14px 16px;
   font-size: 16px;
   font-weight: 500;
   color: ${Colors.TextSecondary};
   @media ${Devices.tablet} {
      width: 100%;
   }
   &:hover {
      border: 1px solid ${Colors.ThemeGreen};
   }
   &:focus {
      border: 2px solid ${Colors.ThemeGreen};
   }
   &.error {
      border: 2px solid ${Colors.ThemeRed};
   }
`;
