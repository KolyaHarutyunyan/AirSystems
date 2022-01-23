import styled from "styled-components";
import { Colors, Devices } from "@eachbase/utils";

export const ContactUsContainerStyled = styled.div`
      width: 100%;
      max-width: 1440px;
      padding: 128px 80px;
      @media ${Devices.tablet} {
         padding: 96px 32px;
      }
      @media ${Devices.mobile} {
         padding: 72px 16px;
      }
      .connect-box {
         width: 100%;
         margin-bottom: 32px;
         @media ${Devices.mobile} {
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
            @media ${Devices.tablet} {
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
         @media ${Devices.tablet} {
            height: 475px;
            margin-bottom: 96px;
         }
         @media ${Devices.mobile} {
            height: 277px;
            margin-bottom: 72px;
         }
      }
`;
