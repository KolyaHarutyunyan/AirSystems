import styled from "styled-components";
import { Colors, Devices } from "@eachbase/utils";

export const MainNavbarStyled = styled.nav`
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
   & > .navbar-button-cont {
      margin: 0 20px 0 28px;
   }
`;

export const NavStyled = styled.nav`
   display: none;
   @media ${Devices.tablet} {
      display: block;
      .navbar-backdrop {
         position: fixed;
         width: 100%;
         height: 100%;
         z-index: 5;
         top: 0;
         right: -100%;
         background-color: inherit;
         transition: background-color 0.5s ease-in-out;
         &.active {
            background-color: #00000098;
            right: 0;
         }
      }
      .hamburger {
         position: fixed;
         top: 19px;
         right: 32px;
         z-index: 9;
         padding: 19px 11px;
         cursor: pointer;
         background-color: transparent;
         transition: background-color 0.5s ease-in-out,
            box-shadow 0.5s ease-in-out;
         &.colorChange {
            background-color: ${Colors.ThemeGreen};
            box-shadow: 0px 2px 4px #00000014;
         }
         &.active {
            background-color: transparent;
            box-shadow: unset;
         }
         @media ${Devices.mobile} {
            top: 24px;
            right: 16px;
            padding: 13px 5px;
         }
         .hamburger-lines {
            position: relative;
            width: 38px;
            height: 22px;
            &.colorChange {
               background-color: ${Colors.ThemeGreen};
            }
            &.active {
               height: 32px;
               & .line {
                  background-color: ${Colors.ThemeGreen};
               }
            }
            & .line {
               position: absolute;
               display: block;
               height: 4px;
               width: 100%;
               background-color: ${Colors.BackgroundPrimary};
               transition: transform 0.5s ease-in-out;
            }
            & .line1 {
               top: 0;
               transform-origin: 0% 0%;
               transition: background-color 0.5s ease-in-out;
               &.active {
                  transform: rotate(45deg);
               }
            }
            & .line2 {
               top: 0;
               left: 0;
               bottom: 0;
               right: 0;
               margin: auto;
               transition: transform 0.5s ease-in-out;
               &.active {
                  transform: scale(0);
               }
            }
            & .line3 {
               bottom: 0;
               transform-origin: 0% 100%;
               transition: transform 0.5s ease-in-out;
               &.active {
                  transform: rotate(-45deg);
                  bottom: unset;
                  top: 80%;
               }
            }
         }
      }
      .menu-items-box {
         background-color: ${Colors.BackgroundPrimary};
         box-shadow: 0px 2px 4px #00000014;
         position: fixed;
         top: 0;
         right: -100%;
         z-index: 7;
         max-width: 372px;
         width: 100%;
         height: 100vh;
         padding-top: 151px;
         padding: 48px;
         padding-bottom: 48px;
         display: flex;
         flex-direction: column;
         transition: right 0.5s ease-in-out;
         overflow-y: auto;
         @media ${Devices.mobile} {
            max-width: 100%;
            padding-top: 160px;
            padding-left: 16px;
         }
         &.active {
            right: 0;
         }
         .menu-items-list {
            width: 100%;
            & li {
               margin-bottom: 36px;
               & a {
                  display: inline-block;
                  cursor: pointer;
                  text-decoration: none;
                  color: inherit;
                  padding-bottom: 2px;
                  border-bottom: 2px solid transparent;
                  transition: border-bottom 0.3s ease-in-out;
                  &:hover {
                     border-bottom: 2px solid ${Colors.ThemeGreen};
                  }
               }
            }
         }
         & > button {
            max-width: 229px;
         }
      }
   }
`;
