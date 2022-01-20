import { Colors, Devices, TextFonts } from "@eachbase/utils";
import styled from "styled-components";

export const TopSectionStyled = styled.section`
   width: 100%;
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
      line-height: 24px;
      width: 465px;
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