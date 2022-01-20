import styled from "styled-components";
import { Colors } from "@eachbase/utils";

export const MainNavbarStyled = styled.div`
   display: flex;
   justify-content: start;
   z-index: 3;
   background-color: ${Colors.BackgroundPrimary};
   box-shadow: 0px 2px 4px #00000014;
   &.web-view {
      position: fixed;
      top: 24px;
      right: 0;
      align-items: center;
      min-height: 60px;
      padding: 0 60px 0 4px;
      @media(max-width: 1280px) {
         display: none;
      }
   }
   &.tablet-mobile-view {
      position: absolute;
      flex-direction: column;
      top: 0;
      right: -380px: 
      min-height: 100vh;
      padding: 151px 48px;
      transition: right 0.4s ease-in-out;
      &.show {
         right: 0;
      }
   }
`;
