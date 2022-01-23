import styled from "styled-components";
import Carousel from "nuka-carousel";
import { Colors, Devices, TextFonts } from "@eachbase/utils";
import { Images } from "@eachbase/assets";

export const BestExperienceStyled = styled.section`
   width: 954px;
   max-width: 1440px;
   margin-top: 128px;

   @media ${Devices.tablet} {
      width: 100%;
      padding: 0 32px;
      margin-top: 96px;
   }

   @media ${Devices.mobile} {
      width: 100%;
      padding: 0 16px;
      margin-top: 72px;
   }

   .theme-indigo {
      color: ${Colors.ThemeIndigo};
   }
   .best-exp-title {
      width: 361px;
      margin-bottom: 32px;
      @media ${Devices.tablet} {
         margin-bottom: 28px;
         width: 100%;
      }
      @media ${Devices.mobile} {
         margin-bottom: 24px;
         width: 100%;
      }
   }
   .benefits-contaner {
      width: 100%;
      display: flex;
      justify-content: space-between;
      @media ${Devices.tablet} {
         flex-direction: column;
         align-items: center;
      }
   }
`;

export const FreeQuotesStyled = styled.section`
   position: relative;
   width: 100%;
   max-width: 1440px;
   height: 600px;
   padding: 0 80px;
   margin-top: 128px;
   display: flex;
   justify-content: space-between;
   @media ${Devices.tablet} {
      flex-direction: column;
      align-items: flex-start;
      height: 654px;
      margin-top: 96px;
      padding: 0 32px;
   }
   @media ${Devices.mobile} {
      justify-content: flex-start;
      height: 523px;
      margin-top: 72px;
      padding: 0 16px;
   }

   .background-primary {
      background-color: ${Colors.BackgroundPrimary};
   }
   .theme-green {
      color: ${Colors.ThemeGreen};
   }
   .text-primary {
      color: ${Colors.TextPrimary};
   }
   .text-tertiary {
      color: ${Colors.TextTertiary};
   }

   .free-quotes__background-img {
      background-image: url(${Images.homepageFreequotesWeb});
      background-repeat: no-repeat;
      background-size: cover;
      width: 49%;
      height: 100%;
      @media ${Devices.tablet} {
         background-image: url(${Images.homepageFreequotesTablet});
         width: 70%;
         height: 100%;
         margin-top: 32px;
      }
      @media ${Devices.mobile} {
         background-image: url(${Images.homepageFreequotesMobile});
         width: 100%;
         height: 300px;
         margin-top: 22px;
      }
   }
   .free-quotes__title-cont {
      line-height: 42px;
      width: 465px;
      @media ${Devices.tablet} {
         width: 70%;
      }
      @media ${Devices.mobile} {
         width: 100%;
         font-size: 24px;
         line-height: 29px;
      }
   }
   .free-quotes__title {
      margin-top: 16%;
      @media ${Devices.tablet} {
         margin-top: 0;
      }
   }

   .free-quotes__absolute-cont {
      line-height: 24px;
      position: absolute;
      top: 60%;
      left: 30%;
      width: 465px;
      padding: 32px 32px 30px;
      @media ${Devices.tablet} {
         top: 70%;
         left: 35%;
         width: 426px;
         padding: 24px 24px 22px;
      }
      @media ${Devices.mobile} {
         top: calc(100% - 213px);
         left: calc(100% - 287px);
         width: 287px;
         padding: 16px 16px 14px;
      }
   }
   .free-quotes__absolute-cont__title {
      font-weight: bold;
   }
   .free-quotes__absolute-cont__descr {
      ${TextFonts["p1.3"]};
      padding-top: 16px;
   }
`;

export const ProvidingServicesStyled = styled.section`
   background-color: ${Colors.BackgroundSecondary};
   width: 100%;
   height: 751px;
   padding: 0;
   margin-top: 128px;
   @media ${Devices.tablet} {
      margin-top: 96px;
      height: fit-content;
   }
   @media ${Devices.mobile} {
      margin-top: 72px;
   }

   .theme-green {
      color: ${Colors.ThemeGreen};
   }
   .theme-indigo {
      color: ${Colors.ThemeIndigo};
   }
   .text-secondary {
      color: ${Colors.TextSecondary};
   }

   .providing-services-layer {
      position: relative;
      width: 100%;
      max-width: 1440px;
      height: 460px;
      padding: 80px;
      margin: 0 auto;
      @media ${Devices.tablet} {
         height: 100%;
         padding: 80px 32px 20px;
      }
      @media ${Devices.mobile} {
         padding: 24px 16px 10px;
      }
   }
   .providing-services-title-cont {
      line-height: 49px;
      display: flex;
      align-items: center;
      margin-bottom: 16px;
      @media ${Devices.tablet} {
      }
      @media ${Devices.mobile} {
         justify-content: center;
         line-height: 29px;
         font-size: 24px;
         font-weight: 800;
         margin-bottom: 16px;
      }
   }
   .providing-services-title {
      padding-right: 16px;
      @media ${Devices.tablet} {
         padding: 0;
      }
   }
   .providing-services-descr {
      line-height: 24px;
      font-weight: ${TextFonts["p1.2"].fontWeight};
      max-width: 465px;
      @media ${Devices.mobile} {
         max-width: 80%;
         margin: 0 auto;
      }
   }
   .providing-services-cards-cont {
      position: absolute;
      top: 235px;
      left: 0;
      width: 100%;
      display: flex;
      justify-content: center;
      @media ${Devices.tablet} {
         position: static;
         flex-wrap: wrap;
         margin-top: 18px;
      }
      @media ${Devices.mobile} {
         margin-top: 10px;
      }
   }
`;

export const WisetackFinancingStyled = styled.section`
   width: 100%;
   max-width: 1440px;
   padding: 0 80px;
   margin-top: 128px;

   @media ${Devices.tablet} {
      width: 100%;
      padding: 0 32px;
      margin-top: 96px;
   }
   @media ${Devices.mobile} {
      width: 100%;
      padding: 0 16px;
      margin-top: 72px;
   }

   .theme-green {
      color: ${Colors.ThemeGreen};
   }
   .theme-indigo {
      color: ${Colors.ThemeIndigo};
   }
   .text-secondary {
      color: ${Colors.TextSecondary};
   }
   .theme-light-blue {
      color: ${Colors.ThemeLightBlue};
   }
   .wisetack-financing-title-cont {
      line-height: 49px;
      display: flex;
      align-items: center;
   }
   .wisetack-financing-title {
      margin-right: 16px;
   }
   .wisetack-financing-descr {
      line-height: 24px;
      font-weight: ${TextFonts["p1.3"].fontWeight};
      width: 465px;
      margin-top: 16px;
      @media ${Devices.tablet} {
         width: 522px;
      }
      @media ${Devices.mobile} {
         width: 100%;
         max-width: 343px;
      }
   }
   .wisetack-financing-img-cont {
      width: 100%;
      display: flex;
      align-items: center;
      margin: 30px 0 32px;
      @media ${Devices.tablet} {
      }
      @media ${Devices.mobile} {
         flex-direction: column;
         align-items: flex-start;
         margin: 22px 0 0;
      }
   }
   .wisetack-financing-img {
      background-image: url(${Images.homepageFinanceWeb});
      background-size: cover;
      width: 100%;
      height: 300px;
      @media ${Devices.tablet} {
         background-image: url(${Images.homepageFinanceTablet});
      }
      @media ${Devices.mobile} {
         background-image: url(${Images.homepageFinanceMobile});
      }
   }
   .wisetack-financing-features-list {
      font-weight: ${TextFonts["p1.2"].fontWeight};
      list-style-position: inside;
      list-style-image: url(${Images.Icons.Checkmark});
      padding-inline-start: 24px;
      @media ${Devices.mobile} {
         padding-inline-start: 0;
      }
   }

   .wisetack-financing-features-list-item {
      width: 302px;
      line-height: 20px;
      ${TextFonts["p1.2"]}
      @media ${Devices.tablet} {
         width: 340px;
      }
      @media ${Devices.mobile} {
         width: 100%;
      }
   }

   .wisetack-financing-features-list-item:not(:first-child) {
      padding-top: 30px;
      @media ${Devices.mobile} {
         padding-top: 20px;
      }
   }
   .wisetack-financing-features-list-item ::marker {
   }

   .wisetack-financing-end {
      line-height: 34px;
      @media ${Devices.tablet} {
         line-height: 42px;
         width: 340px;
      }
      @media ${Devices.mobile} {
         width: 255px;
         font-size: 18px;
         line-height: 30px;
         margin: 24px 0;
      }
   }
`;

export const CustomersOpinionStyled = styled.section`
   width: 100%;
   max-width: 1440px;
   height: fit-content;
   padding: 0 80px;
   margin-top: 126px;
   @media ${Devices.tablet} {
      width: 100%;
      padding: 0 32px;
      margin-top: 94px;
   }
   @media ${Devices.mobile} {
      width: 100%;
      padding: 0 16px;
      margin-top: 72px;
   }

   .theme-indigo {
      color: ${Colors.ThemeIndigo};
   }

   .theme-green {
      color: ${Colors.ThemeGreen};
   }

   .text-secondary {
      color: ${Colors.TextSecondary};
   }

   .customers-opinion-title-cont {
      display: flex;
      align-items: center;
   }
   .customers-opinion-title {
      padding-right: 16px;
   }
   .customers-opinion-descr {
      line-height: 24px;
      font-weight: ${TextFonts["p1.3"].fontWeight};
      width: 465px;
      margin: 16px 0 30px;
      @media ${Devices.tablet} {
         width: 522px;
         margin: 12px 0 30px;
      }
      @media ${Devices.mobile} {
         width: 100%;
         max-width: 343px;
         margin: 14px 0 22px;
      }
   }
`;

export const PartnersStyled = styled.section`
   width: 100%;
   max-width: 1440px;
   padding: 0 80px;
   margin: 128px 0;
   @media ${Devices.tablet} {
      width: 100%;
      padding: 0 32px;
      margin: 96px 0 99px;
   }
   @media ${Devices.mobile} {
      width: 100%;
      padding: 0 16px;
      margin: 72px 0;
   }
   .instead-of-carousel-section {
		display: flex;
		justify-content: space-between;
   }
   .theme-green {
      color: ${Colors.ThemeGreen};
   }

   .theme-indigo {
      color: ${Colors.ThemeIndigo};
   }
   .text-secondary {
      color: ${Colors.TextSecondary};
   }

   .partners__title-cont {
      display: flex;
      align-items: center;
   }
   .partners__title {
      margin-right: 16px;
   }
   .partners__descr {
      line-height: 24px;
      font-weight: ${TextFonts["p1.3"].fontWeight};
      max-width: 465px;
      margin-top: 16px;
      margin-bottom: 30px;
      @media ${Devices.tablet} {
         width: 522px;
      }
      @media ${Devices.mobile} {
         width: 100%;
         max-width: 343px;
         margin: 14px 0 22px;
      }
   }

   .partner-logo {
      width: 162px;
      height: 144px;
      @media ${Devices.tablet} {
         width: 158px;
      }
      @media ${Devices.mobile} {
         width: 166px;
      }
   }
`;

export const ProvidingServiceCardStyled = styled.div`
   background-color: ${Colors.BackgroundPrimary};
   width: 302px;
   padding: 24px 24px 22px;
   display: flex;
   flex-direction: column;
   margin: 12px;
   @media ${Devices.tablet} {
      width: 340px;
      height: 528px;
      margin: 12px 6px;
   }
   @media ${Devices.mobile} {
      width: 343px;
      height: fit-content;
      margin: 12px 14px;
   }

   .text-tertiary {
      color: ${Colors.TextTertiary};
   }

   .service-card-img {
      width: 100%;
   }
   .service-card-title {
      line-height: 34px;
      margin: 24px 0 16px;
   }
   .service-card-list {
      padding-inline-start: 1px;
   }
   .service-card-list-item {
      line-height: 20px;
      ${TextFonts["p1.3"]}
      list-style: none;
      display: flex;
      align-items: center;
      &::before {
         content: "";
         width: 6px;
         height: 6px;
         border-radius: 50%;
         background-color: ${Colors.TextPrimary};
         margin-right: 8px;
      }
   }
   .service-card-list-item:not(:first-child) {
      margin-top: 8px;
   }
`;

export const ListingsCardItemStyled = styled.div`
   background-color: ${Colors.BackgroundSecondary};
   width: 302px;
   height: 188px;
   padding: 24px 24px 22px;

   .text-primary {
      color: ${Colors.TextPrimary};
   }
   .text-tertiary {
      color: ${Colors.TextTertiary};
   }

   .comment-cont {
      line-height: 24px;
      ${TextFonts["p1.3"]}
      padding: 16px 0 14px;
   }
   .author-cont {
      line-height: 20px;
      ${TextFonts["p1.2"]}
   }
`;

export const MainCarouselStyled = styled(Carousel)`
   height: ${({ height }) => height || "200px"}!important;
   & > .slider-control-bottomcenter {
      & > ul > li > button > svg {
         width: 8px !important;
         height: 8px !important;
         border-radius: 50% !important;
         background-color: ${Colors.ThemeGreen} !important;
         border: none !important;
         & > circle {
            display: none;
         }
      }
      & > ul > li.active > button > svg {
         width: 24px !important;
         border-radius: 4px !important;
      }
   }
`;
