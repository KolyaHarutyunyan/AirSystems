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
      position: relative;
      max-width: 1280px;
      width: 100%;
      height: 500px;
      margin-bottom: 128px;
      @media ${Devices.tablet} {
         height: 475px;
         margin-bottom: 96px;
      }
      @media ${Devices.mobile} {
         height: 277px;
         margin-bottom: 72px;
      }
      .marker-pin {
         width: 28px;
         height: 38px;
         & img {
            width: 100%;
         }
         @media ${Devices.mobile} {
            width: 23px;
            height: 33px;
         }
      }
   }
`;

export const mapUi = [
   {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#e9e9e9" }, { lightness: 17 }],
   },
   {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [{ color: "#f5f5f5" }, { lightness: 20 }],
   },
   {
      featureType: "road.highway",
      elementType: "geometry.fill",
      stylers: [{ color: "#ffffff" }, { lightness: 17 }],
   },
   {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [{ color: "#ffffff" }, { lightness: 29 }, { weight: 0.2 }],
   },
   {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [{ color: "#ffffff" }, { lightness: 18 }],
   },
   {
      featureType: "road.local",
      elementType: "geometry",
      stylers: [{ color: "#ffffff" }, { lightness: 16 }],
   },
   {
      featureType: "poi",
      elementType: "geometry",
      stylers: [{ color: "#f5f5f5" }, { lightness: 21 }],
   },
   {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [{ color: "#dedede" }, { lightness: 21 }],
   },
   {
      elementType: "labels.text.stroke",
      stylers: [{ visibility: "on" }, { color: "#ffffff" }, { lightness: 16 }],
   },
   {
      elementType: "labels.text.fill",
      stylers: [{ saturation: 36 }, { color: "#333333" }, { lightness: 40 }],
   },
   { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
   {
      featureType: "transit",
      elementType: "geometry",
      stylers: [{ color: "#f2f2f2" }, { lightness: 19 }],
   },
   {
      featureType: "administrative",
      elementType: "geometry.fill",
      stylers: [{ color: "#fefefe" }, { lightness: 20 }],
   },
   {
      featureType: "administrative",
      elementType: "geometry.stroke",
      stylers: [{ color: "#fefefe" }, { lightness: 17 }, { weight: 1.2 }],
   },
];
