import styled from "styled-components";
import { Colors, TextFonts } from "@eachbase/utils";

let { fontWeight } = TextFonts["p1.2"];

export const HeaderStyled = styled.header`
   width: 100%;
   background-image: url(${({ img }) => img});
   background-repeat: no-repeat;
   background-size: cover;
   height: ${({ height }) => height};
   .header-backdrop {
      position: relative;
      max-width: 100%;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      background: transparent linear-gradient(90deg, #000000b3 0%, #00000033 100%) 0% 0% no-repeat
         padding-box;
   }
   .background-primary {
      color: ${Colors.BackgroundPrimary};
   }

   .main-title {
      width: 628px;
      line-height: 84px;
      margin-top: 13px;
   }
   & .theme-green {
      color: ${Colors.ThemeGreen};
   }
   & .bg-primary {
      color: ${Colors.BackgroundPrimary};
   }
   .contact-info {
      width: 558px;
      height: 60px;
      background-color: ${Colors.BackgroundPrimary};
      color: ${Colors.TextTertiary};
      display: flex;
      align-items: center;
   }
   .single-info {
      line-height: 20px;
      padding: 0 20px;
   }
   & .single-info__key {
      font-weight: bold;
      color: ${Colors.TextPrimary};
   }
   & .single-info__value {
      font-weight: ${fontWeight};
      color: ${Colors.TextTertiary};
   }
   .single-info__Tell {
      padding-left: 0;
   }
   .info-logo-container {
      padding: 24px;
   }
   .title-cont {
      display: flex;
      align-items: center;
      .cont-text {
         color: ${Colors.BackgroundPrimary};
         margin-left: 16px;
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
      padding: 72px 16px;
   }
`;
