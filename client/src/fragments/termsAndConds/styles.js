import styled from "styled-components";
import { Colors, Devices } from "@eachbase/utils";

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
      @media ${Devices.tablet} {
         padding: 83px 32px 0;
      }
      @media ${Devices.mobile} {
         padding: 61px 16px 0;
      }
      .terms-and-conds-box {
         width: 100%;
         margin-bottom: 128px;
         @media ${Devices.tablet} {
            margin-bottom: 96px;
         }
         @media ${Devices.mobile} {
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
            @media ${Devices.tablet} {
               padding: 32px;
            }
            @media ${Devices.mobile} {
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
