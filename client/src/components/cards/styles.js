import styled from "styled-components";
import { Colors, TextFonts } from "@eachbase/utils";
import { Devices } from "@eachbase/utils/devices";

export const BenefitCardStyled = styled.div`
   background-color: ${Colors.BackgroundSecondary};
   width: 302px;
   height: 100%;
   padding: 24px;
   border-radius: 4px;

   transform: translateY(50%);
   opacity: 0;
   transition: all 1s cubic-bezier(0.4, 0, 0, 1);
   &.fadeInUp {
      transform: translateY(0px);
      opacity: 1;
   }
   &.second {
      transition-delay: 0.2s;
   }
   &.third {
      transition-delay: 0.4s;
   }

   @media ${Devices.tablet} {
      width: 100%;
      min-height: 203px;
      :not(:first-child) {
         margin-top: 24px;
      }
   }

   @media ${Devices.mobile} {
      min-height: 238px;
   }

   & .logo-container {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${Colors.ThemeGreen};
      width: 60px;
      height: 60px;
      border-radius: 4px;
   }

   & .logo {
      width: 40px;
      height: 40px;
      background-color: transparent !important;
   }

   & .title {
      max-width: 100%;
      line-height: 24px;
      font-weight: bold;
      margin-bottom: 0;
      margin: 15px 0;
   }
   & .desciption {
      color: ${Colors.TextTertiary};
      line-height: 24px;
      ${TextFonts["p1.3"]}
      &.display {
         display: block;
      }
      @media ${Devices.tablet} {
         max-width: 498px;
      }

      @media ${Devices.mobile} {
      }
   }
   & .read-butn {
      color: ${Colors.ThemeLightBlue};
      font-size: 16px;
      font-weight: 500;
      &.padding {
         padding: 0px;
      }
   }
`;
