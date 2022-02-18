import styled from "styled-components";
import { Colors, Devices } from "@eachbase/utils";

export const PageNotFoundContainerStyled = styled.section`
   max-width: 1440px;
   width: 100%;
   padding: 43px 80px 80px;
   @media ${Devices.tablet} {
      padding: 38px 32px 64px;
   }
   @media ${Devices.mobile} {
      padding: 32px 16px 48px;
   }
   .logo-box {
      width: 152px;
      height: 22px;
      & a img {
         width: 100%;
         object-fit: contain;
      }
      margin-bottom: 96px;
      @media ${Devices.tablet} {
         margin-bottom: 83px;
      }
      @media ${Devices.mobile} {
         margin-bottom: 61px;
      }
   }
   .page-not-found-info-box {
      width: 100%;
      background-color: ${Colors.BackgroundSecondary};
      border-radius: 8px;
      padding: 107px 0;
      display: flex;
      justify-content: center;
      @media ${Devices.mobile} {
         padding: 48px 0 47px;
      }
      .page-not-found-info-content {
         max-width: 490px;
         width: 100%;
         display: flex;
         @media ${Devices.mobile} {
            flex-direction: column;
            .page-not-found-image-box {
               text-align: center;
               & img {
                  width: 80px;
                  height: 80px;
               }
            }
         }
         .page-not-found-info {
            margin-left: 72px;
            @media ${Devices.mobile} {
               margin-left: 0;
               margin-top: 24px;
               text-align: center;
            }
            .info-title {
               color: ${Colors.TextPrimary};
            }
            .info-subtitle-desc-box {
               margin: 24px 0 16px;
               @media ${Devices.mobile} {
                  margin-top: 16px;
               }
               .info-subtitle {
                  color: ${Colors.TextSecondary};
                  margin-bottom: 8px;
               }
               .info-desc {
                  font-size: 16px;
                  font-weight: 600;
                  color: ${Colors.TextTertiary};
                  line-height: 20px;
               }
            }
         }
      }
   }
`;
