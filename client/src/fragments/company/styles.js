import styled from "styled-components";
import { Colors, Devices } from "@eachbase/utils";

export const CompanyFragmentStyled = styled.section`
   flex-grow: 1;
   width: 100%;
   display: flex;
   justify-content: center;
   .company-container {
      max-width: 1440px;
      width: 100%;
      padding: 128px 80px;
      @media ${Devices.tablet} {
         padding: 96px 32px;
      }
      @media ${Devices.mobile} {
         padding: 72px 16px;
      }
      .who-we-are-box {
         width: 100%;
         margin-bottom: 128px;
         @media ${Devices.tablet} {
            margin-bottom: 96px;
         }
         @media ${Devices.mobile} {
            margin-bottom: 72px;
         }
         .who-we-are-title-box {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: 32px;
            .who-we-are-title {
               color: ${Colors.ThemeIndigo};
               margin-right: 16px;
               & em {
                  color: ${Colors.ThemeGreen};
               }
            }
         }
         .who-we-are-info-box {
            max-width: 738px;
            width: 100%;
            @media ${Devices.tablet} {
               max-width: 100%;
            }
            .who-we-are-subtitle {
               color: ${Colors.TextSecondary};
            }
            .who-we-are-description {
               font-size: 16px;
               font-weight: 500;
               color: ${Colors.TextTertiary};
               line-height: 20px;
               margin-top: 16px;
            }
         }
      }
   }
`;
