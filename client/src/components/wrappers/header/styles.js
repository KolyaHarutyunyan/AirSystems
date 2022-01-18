import styled from "styled-components";
import { Colors, TextFonts } from "@eachbase/utils";

let { fontWeight } = TextFonts["p1.2"];

export const HeaderStyled = styled.header`
    background-image: url(${({ img }) => img});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: ${({ height }) => height};

    .background-primary {
        color: ${Colors.BackgroundPrimary};
    }

    .main-title {
        width: 628px;
        line-height: 84px;
        margin-top: 13px;
    }
    & .theme-green {
        color: ${Colors.ThemeGreen};
    }
    & .bg-primary {
        color: ${Colors.BackgroundPrimary};
    }
    .lower-header {
        margin-bottom: 56px;
    }
    .contact-info {
        width: 558px;
        height: 60px;
        background-color: ${Colors.BackgroundPrimary};
        color: ${Colors.TextTertiary};
        display: flex;
        align-items: center;
    }
    .single-info {
        line-height: 20px;
        padding: 0 20px;
    }
    & .single-info__key {
        font-weight: bold;
        color: ${Colors.TextPrimary};
    }
    & .single-info__value {
        font-weight: ${fontWeight};
        color: ${Colors.TextTertiary};
    }
    .single-info__Tell {
        padding-left: 0;
    }

    .info-logo-container {
        padding: 24px;
    }

    .upper-header {
        margin-top: 43px;
    }
`;

export const HeroOverlayStyled = styled.section`
    padding-left: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    background: transparent linear-gradient(90deg, #000000b3 0%, #00000033 100%)
        0% 0% no-repeat padding-box;
`;