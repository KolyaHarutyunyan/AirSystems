import styled from "styled-components";
import { Colors } from "@eachbase/utils";

export const TermsAndCondsFragmentStyed = styled.section`
   flex-grow: 1;
   width: 100%;
   display: flex;
   justify-content: center;
   .terms-and-conds {
   }
   .terms-and-conds-container {
      max-width: 1440px;
      width: 100%;
      padding: 99px 80px 0;
      @media (max-width: 1280px) {
         padding: 83px 32px 0;
      }
      @media (max-width: 768px) {
         padding: 61px 16px 0;
      }
      .terms-and-conds-box {
         width: 100%;
         margin-bottom: 128px;
         @media (max-width: 1280px) {
            margin-bottom: 96px;
         }
         @media (max-width: 768px) {
            margin-bottom: 72px;
         }
         .terms-and-conds-title-box {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: 32px;
            .terms-and-conds-title {
               color: ${Colors.ThemeIndigo};
               margin-right: 16px;
            }
         }
         .terms-and-conds-info-box {
            width: 100%;
            padding: 40px;
            background-color: ${Colors.BackgroundSecondary};
            border-radius: 4px;
            @media (max-width: 1280px) {
               padding: 32px;
            }
            @media (max-width: 768px) {
               padding: 16px;
            }
            .terms-and-conds-description {
               font-size: 16px;
               font-weight: 500;
               color: ${Colors.TextSecondary};
               line-height: 24px;
               &:not(:first-child) {
                  margin-top: 16px;
               }
            }
         }
      }
   }
`;
