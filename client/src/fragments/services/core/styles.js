import { Colors, Devices, TextFonts } from "@eachbase/utils";
import styled from "styled-components";

export const TopSectionStyled = styled.section`
   width: 100%;
   max-width: 1440px;
   padding: 0 80px;
   margin: 128px 0;
   @media ${Devices.tablet} {
      width: 100%;
      padding: 0 32px;
      margin: 96px 0;
   }
   @media ${Devices.mobile} {
      width: 100%;
      padding: 0 16px;
      margin: 72px 0;
   }
   .theme-indigo {
      color: ${Colors.ThemeIndigo};
   }
   .theme-green {
      color: ${Colors.ThemeGreen};
   }
   .text-secondary {
      color: ${Colors.TextSecondary};
   }
   & .title-cont {
      display: flex;
      align-items: center;
      & .title {
         margin-right: 16px;
      }
   }
   & .descr {
      ${TextFonts["p1.3"]}
      line-height: 20px;
      width: 668px;
      margin-top: 32px;
      @media ${Devices.tablet} {
         width: 100%;
      }
      @media ${Devices.mobile} {
         width: 100%;
         margin-top: 16px;
      }
   }
`;


export const BigCardStyled = styled.div`
   width: 100%;
   display: flex;
   flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
   justify-content: space-between;
   align-items: center;
   margin-bottom: 128px;
   @media ${Devices.tablet} {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      margin-bottom: 96px;
   }
   @media ${Devices.mobile} {
      margin-bottom: 72px;
   }

   .info-section {
      width: 100%;
      max-width: 450px;
      padding: ${({ reverse }) => (reverse ? `0 0 0 40px` : `0 40px 0 0`)};
      margin-bottom: 4%;
      @media ${Devices.tablet} {
         max-width: 80%;
         padding: 0;
         margin-bottom: 0;
      }
      @media ${Devices.mobile} {
         max-width: 100%;
         display: flex;
         flex-direction: column;
         align-items: flex-start;
      }
   }

   .theme-indigo {
      color: ${Colors.ThemeIndigo};
   }
   .text-primary {
      color: ${Colors.TextPrimary};
   }
   .text-tertiary {
      color: ${Colors.TextTertiary};
   }

   .card-caption-cont {
      display: flex;
      align-items: center;
      .card-caption {
         height: fit-content;
         margin-top: 2px;
         padding-right: 16px;
         @media ${Devices.mobile} {
            padding-right: 8px;
         }
      }
      .card-icon {
         width: 60px;
         height: 60px;
         @media ${Devices.tablet} {
         }
         @media ${Devices.mobile} {
            width: 48px;
            height: 48px;
         }
      }
   }

   .descr-cont {
      margin: 32px 0;
      @media ${Devices.tablet} {
      }
      @media ${Devices.mobile} {
         margin: 24px 0;
      }
   }

   .descr-title {
      display: flex;
      align-items: center;
   }
   .descr-p {
      line-height: 24px;
      font-weight: ${TextFonts["p1.3"].fontWeight};
      margin-top: 16px;
   }

   .card-list {
      max-width: 100%;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      padding-inline-start: 1px;
      @media ${Devices.tablet} {
         flex-direction: row;
         align-items: center;
      }
      @media ${Devices.mobile} {
         flex-direction: column;
         align-items: flex-start;
      }
   }
   .card-list-item {
      line-height: 20px;
      ${TextFonts["p1.3"]}
      list-style: none;
      display: flex;
      align-items: center;
      white-space: nowrap;
      @media ${Devices.tablet} {
         margin: 0 32px 16px 0;
      }
      @media ${Devices.mobile} {
         margin: 0;
      }
      &::before {
         content: "";
         width: 6px;
         height: 6px;
         border-radius: 50%;
         background-color: ${Colors.TextPrimary};
         margin-right: 8px;
      }
   }
   .card-list-item:not(:first-child) {
      margin-top: 8px;
      @media ${Devices.tablet} {
         margin-top: 0;
      }
      @media ${Devices.mobile} {
         margin-top: 16px;
      }
   }
`;

export const ChessImgSectionStyled = styled.div`
   position: relative;
   max-width: 791px;
   width: 100%;
   height: 534px;
   padding: ${({ reverse }) => (reverse ? "32px 0 0 32px" : "0 32px 32px 0")};
   @media ${Devices.tablet} {
      max-width: 100%;
      height: 432px;

      margin: 16px 0 32px;
   }
   @media ${Devices.mobile} {
      height: 271px;
      padding: ${({ reverse }) => (reverse ? "24px 0 0 24px" : "0 24px 24px 0")};
      margin: 24px 0;
   }
   & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
   }
   & > .layer {
      position: absolute;
      background-color: ${({ bg }) => bg};
      z-index: -1;
      width: 80%;
      height: 85%;
   }

   .left-top {
      left: 0;
      top: 0;
   }
   .right-bottom {
      right: 0;
      bottom: 0;
   }
`;
