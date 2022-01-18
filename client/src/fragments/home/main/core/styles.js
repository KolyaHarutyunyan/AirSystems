import styled from "styled-components";
import Carousel from "nuka-carousel";
import { Colors, Devices, TextFonts } from "@eachbase/utils";
import { Images } from "@eachbase/assets";

export const BestExperienceStyled = styled.section`
    width: 954px;
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
    & .best-exp-title {
        width: 361px;
        line-height: 50px;
        margin-bottom: 32px;

        @media ${Devices.mobile} {
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
            font-size: 24px;
            line-height: 29px;
        }
        @media ${Devices.mobile} {
            width: 100%;
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
        background-color: ${Colors.BackgroundSecondary};
        width: 100%;
        height: 460px;
        padding: 80px;
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
    height: 530px;
    padding: 0 80px;
    margin-top: 128px;
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
    }
    .wisetack-financing-img-cont {
        width: 100%;
        height: 100%;
        max-height: 300px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 30px 0 32px;
    }
    .wisetack-financing-img {
        background-image: url(${Images.homepageFinanceWeb});
        background-size: cover;
        width: 100%;
        height: 100%;
    }
    .wisetack-financing-features-list {
        font-weight: ${TextFonts["p1.2"].fontWeight};
        /* width: 302px; */
        /* display: inline-block; */
        list-style-position: inside;
        list-style-image: url(${Images.Icons.Checkmark});
        padding-inline-start: 24px;
    }

    .wisetack-financing-features-list-item {
        line-height: 20px;
        ${TextFonts["p1.2"]}
    }

    .wisetack-financing-features-list-item:not(:first-child) {
        padding-top: 30px;
    }
    .wisetack-financing-features-list-item ::marker {
        /* display: flex; */
        /* align-items: center; */

        /* unicode-bidi: isolate;
        font-variant-numeric: tabular-nums;
        text-transform: none;
        text-indent: 0px !important;
        text-align:center !important;
        text-align-last: start !important; */
    }

    .wisetack-financing-end {
        line-height: 34px;
    }
`;

export const CustomersOpinionStyled = styled.section`
    width: 100%;
    height: 415px;
    padding: 0 80px;
    margin-top: 126px;

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
        line-height: 49px;
        display: flex;
        align-items: center;
        margin-bottom: 16px;
    }
    .customers-opinion-title {
        padding-right: 16px;
    }
    .customers-opinion-descr {
        line-height: 24px;
        font-weight: ${TextFonts["p1.3"].fontWeight};
        max-width: 465px;
    }

    .customers-opinion-carousel-cont {
        height: 220px !important;
        margin-top: 30px;
        & button {
            width: 8px !important;
            height: 8px !important;
            border-radius: 50%;
            margin: 0 4px;
            color: ${Colors.ThemeGreen} !important;
        }
    }
`;

export const PartnersStyled = styled.section`
    width: 100%;
    padding: 0 80px;
    margin: 128px 0;

    .theme-green {
        color: ${Colors.ThemeGreen};
    }

    .theme-indigo {
        color: ${Colors.ThemeIndigo};
    }

    .partners__title-cont {
        line-height: 49px;
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
    }

    .partners__logo-cont {
    }
    .partner-logo-wrapper {
    }
    .partner-logo {
        width: 162px;
        height: 144px;
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
        list-style-position: inside;
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
    height: ${({ height }) => height || "220px"}!important;
`;
