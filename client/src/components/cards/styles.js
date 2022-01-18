import { Colors, TextFonts } from "@eachbase/utils";
import { Devices } from "@eachbase/utils/devices";
import styled from "styled-components";

export const BenefitCardStyled = styled.div`
    background-color: ${Colors.BackgroundSecondary};
    width: 302px;
    padding: 24px;
    border-radius: 4px;

    @media ${Devices.tablet} {
        width: 100%;
        min-height: 203px;
        :not(:first-child) {
            margin-top: 24px;
        }
    }

    @media ${Devices.mobile} {
        min-height: 238px;
    }

    & .logo-container {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${Colors.ThemeGreen};
        width: 60px;
        height: 60px;
        border-radius: 4px;
    }

    & .logo {
        width: 40px;
        height: 40px;
        background-color: transparent !important;
    }

    & .title {
        max-width: 100%;
        line-height: 24px;
        font-weight: bold;
        margin-bottom: 0;
        margin: 15px 0;
    }
    & .desciption {
        color: ${Colors.TextTertiary};
        line-height: 24px;
        ${TextFonts["p1.3"]}
        @media ${Devices.tablet} {
            max-width: 498px;
        }

        @media ${Devices.mobile} {
        }
    }
`;
