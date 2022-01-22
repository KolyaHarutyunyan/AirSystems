import styled from "styled-components";
import { Colors, Devices } from "@eachbase/utils";

export const MainNavbarStyled = styled.div`
   display: flex;
   justify-content: start;
   background-color: ${Colors.BackgroundPrimary};
   box-shadow: 0px 2px 4px #00000014;
   position: fixed;
   top: 24px;
   right: 0;
   z-index: 3;
   align-items: center;
   min-height: 60px;
   padding: 0 60px 0 4px;
   @media ${Devices.tablet} {
      display: none;
   }
   &>.navbar-button-cont {
      margin: 0 20px 0 28px;
   }
`;
