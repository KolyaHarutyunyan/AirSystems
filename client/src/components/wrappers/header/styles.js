import styled from "styled-components";
import { Colors, TextFonts } from "@eachbase/utils";
import { Images } from "@eachbase/assets";

let { fontWeight } = TextFonts["p1.2"];

export const HeaderStyled = styled.header`
   width: 100%;
   background-image: url(${({ img }) => img});
   background-repeat: no-repeat;
   background-size: cover;
   .header-backdrop {
      position: relative;
      max-width: 100%;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      background: transparent linear-gradient(90deg, #000000b3 0%, #00000033 100%) 0% 0% no-repeat
         padding-box;
      .background-primary {
         color: ${Colors.BackgroundPrimary};
      }
      .main-title {
         width: 628px;
         margin: 115px 0 63px;
         @media (max-width: 1280px) {
            width: 411px;
            margin: 73px 0 36px;
         }
         @media (max-width: 768px) {
            width: 289px;
            margin: 50px 0 36px;
         }
      }
      & .theme-green {
         color: ${Colors.ThemeGreen};
      }
      & .bg-primary {
         color: ${Colors.BackgroundPrimary};
      }
      .contact-info {
         width: 608px;
         padding: 18px 24px;
         background-color: ${Colors.BackgroundPrimary};
         color: ${Colors.TextTertiary};
         display: flex;
         align-items: center;
         @media (max-width: 768px) {
            display: none;
         }
         .single-info {
            line-height: 20px;
            &:not(:first-child) {
               margin: 0 24px;
            }
            .single-info__key {
               font-weight: bold;
               color: ${Colors.TextPrimary};
            }
            .single-info__value {
               font-weight: ${fontWeight};
               color: ${Colors.TextTertiary};
            }
         }
      }
      .title-cont {
         display: flex;
         align-items: center;
         .cont-text {
            color: ${Colors.BackgroundPrimary};
            margin-left: 16px;
         }
      }
   }
`;

export const HeaderContentStyled = styled.section`
   max-width: 1440px;
   width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   height: 100%;
   padding: 43px 80px 56px;
   @media (max-width: 1280px) {
      padding: 38px 32px;
   }
   @media (max-width: 768px) {
      padding: 38px 16px 24px;
   }
   .lower-header {
      & .contact-info__mobile-view {
         display: none;
         @media (max-width: 768px) {
            display: flex;
            align-items: center;
            width: 343px;
            padding: 15px 19px;
            background-color: ${Colors.BackgroundPrimary};
            & > span {
               font-size: 16px;
               font-weight: 600;
               line-height: 20px;
               color: ${Colors.TextTertiary};
               margin-right: 26px;
               display: inline-flex;
               align-items: center;
               &::before {
                  content: "";
                  width: 18px;
                  height: 19px;
                  background-position: center;
                  background-repeat: no-repeat;
                  background-size: contain;
                  margin-right: 11px;
               }
               &:first-child::before {
                  background-image: url(${Images.dropdownArrowBlack});
               }
               &:last-child::before {
                  background-image: url(${Images.dropdownArrow});
               }
            }
         }
      }
   }
`;

export const NavStyled = styled.nav`
   display: none;
   @media (max-width: 1280px) {
      display: block;
      .navbar-backdrop {
         position: fixed;
         width: 100%;
         height: 100%;
         top: 0;
         left: 0;
         background-color: inherit;
         transition: background-color 0.5s ease-in-out;
         &.active {
            background-color: #00000098;
         }
      }
      & .hamburger-lines {
         position: fixed;
         top: 24px;
         right: 32px;
         z-index: 3;
         width: 38px;
         height: 22px;
         cursor: pointer;
         @media (max-width: 768px) {
            top: 32px;
            right: 20px;
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
            background-color: ${Colors.ThemeGreen};
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
      .menu-items-box {
         background-color: ${Colors.BackgroundPrimary};
         box-shadow: 0px 2px 4px #00000014;
         position: fixed;
         top: 0;
         right: -100%;
         z-index: 1;
         max-width: 372px;
         width: 100%;
         height: 100vh;
         padding-top: 151px;
         padding-left: 48px;
         display: flex;
         flex-direction: column;
         transition: right 0.5s ease-in-out;
         @media (max-width: 768px) {
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
               margin-bottom: 72px;
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
