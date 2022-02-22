import styled from "styled-components";
import { Colors, Devices } from "@eachbase/utils";

export const MeetOurFounderStyled = styled.section`
   width: 100%;
   margin-bottom: 128px;
   @media ${Devices.tablet} {
      margin-bottom: 96px;
   }
   @media ${Devices.mobile} {
      margin-bottom: 72px;
   }

   transform: translateY(50%);
   opacity: 0;
   transition: all 1s cubic-bezier(0.4, 0, 0, 1);
   &.fadeInUp {
      transform: translateY(0px);
      opacity: 1;
   }

   .founder-info-title__mobile-view {
      color: ${Colors.ThemeIndigo};
      margin-right: 32px;
      & > em {
         color: ${Colors.ThemeGreen};
      }
      display: none;
      @media ${Devices.mobile} {
         display: block;
      }
   }
   .meet-our-founder-container {
      width: 100%;
      display: flex;
      align-items: center;
      @media ${Devices.tablet} {
         flex-direction: column;
      }
      @media ${Devices.mobile} {
         flex-direction: column-reverse;
      }
      .founder-info-box {
         max-width: 612px;
         width: 100%;
         @media ${Devices.tablet} {
            max-width: 100%;
         }
      }
      .founder-info-title__web-view {
         color: ${Colors.ThemeIndigo};
         margin-right: 32px;
         & > em {
            color: ${Colors.ThemeGreen};
         }
         @media ${Devices.mobile} {
            display: none;
         }
      }
      .founder-info-description {
         font-size: 16px;
         font-weight: 500;
         color: ${Colors.TextTertiary};
         line-height: 20px;
         margin-top: 16px;
         @media ${Devices.mobile} {
            &.first-desc {
               margin-top: 32px;
            }
         }
      }
      .read-more-box {
         width: 100%;
         text-align: right;
         margin-top: 8px;
         display: none;
         @media ${Devices.mobile} {
            display: block;
         }
      }
      .founder-image-box {
         position: relative;
         max-width: 612px;
         width: 100%;
         height: 512px;
         padding: 32px 32px 32px 0px;
         display: flex;
         justify-content: flex-end;
         margin-left: 32px;
         @media ${Devices.tablet} {
            max-width: 100%;
            margin-left: 0;
            margin-top: 32px;
            padding: 32px 32px 0 0;
         }
         @media ${Devices.mobile} {
            height: 247px;
         }
         & > img {
            width: 100%;
            object-fit: cover;
         }
         .founder-image-backdrop {
            position: absolute;
            top: 0;
            right: 0;
            z-index: -1;
            width: 50%;
            height: 512px;
            background-color: #00000019;
            @media ${Devices.tablet} {
               width: 80%;
               height: 75%;
            }
         }
      }
   }
`;

export const AboutCompanyStyled = styled.section`
   width: 100%;
   padding: 52px 0;
   background-color: ${Colors.BackgroundSecondary};
   @media ${Devices.tablet} {
      padding: 52px 32px 60px;
   }
   @media ${Devices.mobile} {
      padding: 16px 16px 48px;
   }
   .about-company-box {
      max-width: 954px;
      width: 100%;
      margin: 0 auto;
      @media ${Devices.tablet} {
         max-width: 100%;
      }
      .about-company-box__first {
         width: 100%;
         display: flex;
         margin-bottom: 24px;
         @media ${Devices.mobile} {
            flex-direction: column;
            margin-bottom: 16px;
         }
         & > div {
            max-width: 465px;
            @media ${Devices.tablet} {
               max-width: 100%;
            }
         }
         & > div:last-child {
            margin-left: 24px;
            @media ${Devices.mobile} {
               margin-left: 0;
               margin-top: 16px;
            }
         }
      }
   }
`;
