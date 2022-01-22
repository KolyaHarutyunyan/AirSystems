import styled from "styled-components";
import { Colors, Devices } from "@eachbase/utils";

export const QuickMessageStyled = styled.section`
   width: 100%;
   padding: 80px 163px;
   background-color: ${Colors.BackgroundSecondary};
   margin-bottom: 128px;
   @media ${Devices.tablet} {
      padding: 80px 40px;
      margin-bottom: 96px;
   }
   @media ${Devices.mobile} {
      padding: 32px 16px;
      margin-bottom: 72px;
   }
   .quick-message-container {
      width: 100%;
      .quick-message-box {
         width: 100%;
         margin-bottom: 32px;
         .quick-message-title-box {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: 16px;
            @media ${Devices.tablet} {
               margin-bottom: 65px;
            }
            @media ${Devices.mobile} {
               margin-bottom: 45px;
            }
            .quick-message-title {
               color: ${Colors.ThemeIndigo};
               margin-right: 16px;
               & em {
                  color: ${Colors.ThemeGreen};
               }
            }
         }
         .quick-message-description {
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
      .quick-message-inputs-box {
         width: 100%;
         display: flex;
         @media ${Devices.tablet} {
            flex-direction: column;
         }
         .name-email-box {
            flex-grow: 1;
            @media ${Devices.tablet} {
               display: flex;
               align-items: center;
               & > div:last-child {
                  margin-left: 24px;
               }
            }
            @media ${Devices.mobile} {
               display: block;
               & > div:last-child {
                  margin-left: 0;
               }
            }
         }
         .message-box {
            margin-left: 24px;
            @media ${Devices.tablet} {
               margin-left: 0;
            }
         }
      }
      .user-action-box {
         width: 100%;
         @media ${Devices.mobile} {
            text-align: right;
         }
         .btn-load-time {
            width: 81px;
            height: 40px;
         }
      }
   }
`;

export const EstimateRequestStyled = styled.section`
   width: 100%;
   padding: 0 163px;
   @media ${Devices.tablet} {
      padding: 0 0;
   }
   .estimate-request-container {
      width: 100%;
      .estimate-request-box {
         width: 100%;
         margin-bottom: 32px;
         @media ${Devices.tablet} {
            margin-bottom: 56px;
         }
         @media ${Devices.mobile} {
            margin-bottom: 32px;
         }
         .estimate-request-title-box {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: 16px;
            .estimate-request-title {
               color: ${Colors.ThemeIndigo};
               margin-right: 16px;
               & em {
                  color: ${Colors.ThemeGreen};
               }
            }
         }
         .estimate-request-description {
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
      .estimate-request-inputs-box {
         width: 100%;
         .user-request-inputs-box {
            & > div {
               width: 100%;
               display: flex;
               & > div:last-child {
                  margin-left: 24px;
               }
               @media ${Devices.mobile} {
                  display: block;
                  & > div:last-child {
                     margin-left: 0;
                  }
               }
            }
         }
         .address-input-box {
            & > div {
               max-width: 100%;
            }
         }
      }
      .user-action-box {
         width: 100%;
         @media ${Devices.mobile} {
            text-align: right;
         }
         .btn-load-time {
            width: 176px;
            height: 40px;
         }
      }
   }
`;
