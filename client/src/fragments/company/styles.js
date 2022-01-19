import styled from "styled-components";
import { Colors } from "@eachbase/utils";

export const CompanyFragmentStyled = styled.section`
   width: 100%;
   display: flex;
   justify-content: center;
   .company-container {
      max-width: 1440px;
      width: 100%;
      padding: 128px 80px;
      @media (max-width: 1280px) {
         padding: 96px 32px;
      }
      @media (max-width: 768px) {
         padding: 72px 16px;
      }
      .who-we-are-box {
         width: 100%;
         margin-bottom: 128px;
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
