import styled from "styled-components";
import { Colors } from "@eachbase/utils";

export const MeetOurFounderStyled = styled.section`
   width: 100%;
   margin-bottom: 128px;
   @media (max-width: 1280px) {
      margin-bottom: 96px;
   }
   @media (max-width: 768px) {
      margin-bottom: 72px;
   }
   .founder-info-title__mobile-view {
      color: ${Colors.ThemeIndigo};
      margin-right: 32px;
      & > em {
         color: ${Colors.ThemeGreen};
      }
      display: none;
      @media (max-width: 768px) {
         display: block;
      }
   }
   .meet-our-founder-container {
      width: 100%;
      display: flex;
      align-items: center;
      @media (max-width: 1280px) {
         flex-direction: column;
      }
      @media (max-width: 768px) {
         flex-direction: column-reverse;
      }
      .founder-info-box {
         max-width: 612px;
         width: 100%;
         @media (max-width: 1280px) {
            max-width: 100%;
         }
      }
      .founder-info-title__web-view {
         color: ${Colors.ThemeIndigo};
         margin-right: 32px;
         & > em {
            color: ${Colors.ThemeGreen};
         }
         @media (max-width: 768px) {
            display: none;
         }
      }
      .founder-info-description {
         font-size: 16px;
         font-weight: 500;
         color: ${Colors.TextTertiary};
         line-height: 20px;
         margin-top: 16px;
         @media (max-width: 768px) {
            &.first-desc {
               margin-top: 32px;
            }
         }
      }
      .read-more-box {
         width: 100%;
         text-align: right;
         margin-top: 8px;
         display: none;
         @media (max-width: 768px) {
            display: block;
         }
      }
      .founder-image-box {
         position: relative;
         max-width: 612px;
         width: 100%;
         height: 512px;
         padding: 32px 32px 32px 0px;
         display: flex;
         justify-content: flex-end;
         margin-left: 32px;
         @media (max-width: 1280px) {
            max-width: 100%;
            margin-left: 0;
            margin-top: 32px;
            padding: 32px 32px 0 0;
         }
         @media (max-width: 768px) {
            height: 247px;
         }
         & > img {
            width: 100%;
            object-fit: cover;
         }
         .founder-image-backdrop {
            position: absolute;
            top: 0;
            right: 0;
            z-index: -1;
            width: 50%;
            height: 512px;
            background-color: #00000019;
            @media (max-width: 1280px) {
               width: 80%;
               height: 75%;
            }
         }
      }
   }
`;

export const AboutCompanyStyled = styled.section`
   width: 100%;
   padding: 52px 0;
   background-color: ${Colors.BackgroundSecondary};
   @media (max-width: 1280px) {
      padding: 52px 32px 60px;
   }
   @media (max-width: 768px) {
      padding: 16px 16px 48px;
   }
   .about-company-box {
      max-width: 954px;
      width: 100%;
      margin: 0 auto;
      @media (max-width: 1280px) {
         max-width: 100%;
      }
      .about-company-box__first {
         width: 100%;
         display: flex;
         margin-bottom: 24px;
         @media (max-width: 768px) {
            flex-direction: column;
            margin-bottom: 16px;
         }
         & > div {
            max-width: 465px;
            @media (max-width: 1280px) {
               max-width: 100%;
            }
         }
         & > div:last-child {
            margin-left: 24px;
            @media (max-width: 768px) {
               margin-left: 0;
               margin-top: 16px;
            }
         }
      }
   }
`;
