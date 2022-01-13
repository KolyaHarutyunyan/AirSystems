import styled from "styled-components";
import { Colors, TextFonts } from "../../utils/globalUi";

let { fontSize, fontWeight } = TextFonts.p2;

export const FooterStyled = styled.footer`
    align-self: flex-end;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${Colors.BackgroundSecondary};
    width: 100%;
    height: 390px;
    padding: 80px 80px 13px 80px;
    & .upper-footer {
        height: 247px;
    }
    & .lower-footer {
        color: ${Colors.TextTertiary};
        line-height: 24px;
        font-size: ${fontSize};
        font-weight: ${fontWeight};
        width: 100%;
        height: 62px;
        display: flex;
        justify-content: space-between;
        margin-top: 16px;
    }
    .rights, .rules{
        height: 15px;
    }
    .privacy {
        padding-left: 32px;
    }
`;

export const UpperFooterStyled = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;

    .indigo-heading {
        color: ${Colors.ThemeIndigo};
    }

    .socal-media {
        height: 146px;
        width: 220px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        line-height: 22px;
    }

    .socal-la {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .theme-green {
        color: ${Colors.ThemeGreen};
    }

    .quality {
        line-height: 20px;
        ${TextFonts["p1.1"]};
        color: ${Colors.TextPrimary};
    }

    .follow-container {
        display: flex;
    }

    .logos-container{
        display: flex;
        gap: 8px;
        padding-left: 16px;
    }

    .contact-us {
        width: 347px;
        height: 183px;
        display: flex;
        flex-direction: column;
    }

    .contact-us-title {
        color: ${Colors.ThemeIndigo};
        line-height: 22px;
    }

    .single-info {
        padding-top: 16px;
    }

    .single-info__Hours {
        padding-left: 15px;
    }

    .single-info__Days,
    .single-info__Hours{
        padding-top: 0;
    }

    .single-info__key {
        font-weight: bold;
        color: ${Colors.TextPrimary};
    }
    .single-info__value {
        font-weight: ${TextFonts["p1.2"].fontWeight};
        color: ${Colors.TextTertiary};
    }

    .availability-info {
        display: flex;
        padding-top: 8px;
    }

    .newsletter {
        width: 465px;
        height: 160px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    & .subscribe {
        margin: 0;
        padding: 12px 40px;
    }

    & .description {
        color: ${Colors.TextTertiary};
        line-height: 24px;
        ${TextFonts["p1.3"]};
        margin-bottom: 18px;
    }

    .email-input-container {
        width: 100%;
        height: 44px;
        display: flex;
        align-items: center;
    }

    .MuiOutlinedInput-input {
        padding: 15px 0 13px 16px;
        background-color: ${Colors.BackgroundPrimary};
        ${TextFonts["p1.3"]};
    }
`;