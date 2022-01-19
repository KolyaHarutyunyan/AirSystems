import styled from "styled-components";
import { Colors } from "@eachbase/utils";

export const MeetOurFounderStyled = styled.section`
   width: 100%;
   margin-bottom: 128px;
   .meet-our-founder-container {
      width: 100%;
      display: flex;
      align-items: center;
      .founder-info-box {
         max-width: 612px;
         width: 100%;
         margin-right: 40px;
      }
      .founder-info-title {
         color: ${Colors.ThemeIndigo};
         margin-right: 32px;
         & > em {
            color: ${Colors.ThemeGreen};
         }
      }
      .founder-info-description {
         font-size: 16px;
         font-weight: 500;
         color: ${Colors.TextTertiary};
         line-height: 20px;
         margin-top: 16px;
      }
      .read-more-box {
         width: 100%;
         text-align: right;
         display: none;
         @media (max-width: 768px) {
            display: block;
         }
      }
      .founder-image-box {
         max-width: 612px;
         width: 100%;
         display: flex;
         justify-content: flex-end;
         .founder-image-backdrop {
            width: 330px;
            height: 512px;
            background-color: #00000019;
            position: relative;
            & > img {
               position: absolute;
               top: 32px;
               right: 32px;
               width: 596px;
               height: 448px;
            }
         }
      }
   }
`;

export const AboutCompanyStyled = styled.section`
   width: 100%;
   padding: 52px 163px;
   background-color: ${Colors.BackgroundSecondary};
   .about-company-box {
      width: 100%;
      display: flex;
      flex: 1 1 50%;
   }
`;
