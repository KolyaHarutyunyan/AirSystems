import styled from "styled-components";
import { Colors, Devices } from "@eachbase/utils";

export const PrivacyPolicyContainerStyled = styled.section`
   max-width: 1440px;
   width: 100%;
   padding: 43px 80px 0;
   @media ${Devices.tablet} {
      padding: 38px 32px 0;
   }
   @media ${Devices.mobile} {
      padding: 32px 16px 0;
   }
   .logo-box {
      width: 100%;
      margin-bottom: 99px;
      @media ${Devices.tablet} {
         margin-bottom: 83px;
      }
      @media ${Devices.mobile} {
         margin-bottom: 61px;
      }
      .logo {
         color: ${Colors.ThemeGreen};
      }
   }
   .privacy-policy-box {
      width: 100%;
      margin-bottom: 128px;
      @media ${Devices.tablet} {
         margin-bottom: 96px;
      }
      @media ${Devices.mobile} {
         margin-bottom: 72px;
      }
      .privacy-policy-title-box {
         width: 100%;
         display: flex;
         align-items: center;
         margin-bottom: 32px;
         .privacy-policy-title {
            color: ${Colors.ThemeIndigo};
            margin-right: 16px;
         }
      }
      .privacy-policy-info-box {
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
         .privacy-policy-description {
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
`;
