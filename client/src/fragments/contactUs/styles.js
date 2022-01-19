import styled from "styled-components";
import { Colors } from "@eachbase/utils";

export const ContactUsFragmentStyled = styled.section`
   width: 100%;
   display: flex;
   justify-content: center;
   .contact-us-container {
      max-width: 1440px;
      width: 100%;
      padding: 128px 80px;
      @media (max-width: 1280px) {
         padding: 96px 32px;
      }
      @media (max-width: 768px) {
         padding: 72px 16px;
      }
      .connect-box {
         width: 100%;
         margin-bottom: 32px;
         @media (max-width: 768px) {
            margin-bottom: 48px;
         }
         .connect-title-box {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: 16px;
            .connect-title {
               color: ${Colors.ThemeIndigo};
               margin-right: 16px;
               & em {
                  color: ${Colors.ThemeGreen};
               }
            }
         }
         .connect-description {
            max-width: 465px;
            width: 100%;
            font-size: 16px;
            font-weight: 500;
            color: ${Colors.TextSecondary};
            line-height: 24px;
            @media (max-width: 1280px) {
               max-width: 100%;
            }
         }
      }
      .connect-map {
         max-width: 1280px;
         width: 100%;
         height: 500px;
         background-color: ${Colors.BackgroundSecondary};
         margin-bottom: 128px;
         @media (max-width: 1280px) {
            height: 475px;
            margin-bottom: 96px;
         }
         @media (max-width: 768px) {
            height: 277px;
            margin-bottom: 72px;
         }
      }
   }
`;
