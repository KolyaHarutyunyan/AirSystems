import styled from "styled-components";
import { Colors, Devices } from "@eachbase/utils";

export const AboutCompanyItemStyled = styled.div`
   width: 100%;
   padding: 52px 95px;
   background-color: ${Colors.BackgroundPrimary};
   display: flex;
   justify-content: center;
   align-items: center;
   @media ${Devices.tablet} {
      padding: 25px 24px;
   }
   @media ${Devices.mobile} {
      padding: 36px 24px;
   }

   transform: translateY(50%);
   opacity: 0;
   transition: all 1s cubic-bezier(0.4, 0, 0, 1);
   &.fadeInUp {
      transform: translateY(0px);
      opacity: 1;
   }
   &.second {
      transition-delay: 0.2s;
   }
   &.third {
      transition-delay: 0.4s;
   }

   .about-company-item-box {
      width: 100%;
      background-color: inherit;
      .about-company-item-title {
         color: ${Colors.TextPrimary};
         display: flex;
         align-items: center;
         margin-bottom: 16px;
         @media ${Devices.mobile} {
            margin-bottom: 23px;
         }
         &::after {
            content: "";
            display: inline-block;
            width: 50px;
            height: 50px;
            background-image: url(${({ icon }) => icon});
            background-repeat: no-repeat;
            background-size: contain;
            background-position: center;
            margin-left: 16px;
            @media (max-width: 785px) {
               width: 42px;
               height: 42px;
            }
            @media ${Devices.mobile} {
               margin-left: 8px;
               width: 48px;
               height: 48px;
            }
         }
      }
      .about-company-item-subtitle {
         color: ${Colors.TextSecondary};
         margin: 16px 0;
      }
      .about-company-item-description {
         font-size: 16px;
         font-weight: 400;
         color: #79869f;
         line-height: 20px;
      }
   }
`;
