import { Colors, TextFonts } from "@eachbase/utils";
import styled from "styled-components";

const BenefitCardStyled = styled.div`
    background-color: ${Colors.BackgroundSecondary};
    width: 302px;
    padding: 24px;
    border-radius: 4px;

    & .logo-container {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${Colors.ThemeGreen};
        width: 60px;
        height: 60px;
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
    }
`;

export const BenefitCard = ({ ben }) => {
    let { logo, title, description } = ben;
    return (
        <BenefitCardStyled>
            <div className="logo-container">
                <img className="logo" src={logo} alt="logo" />
            </div>
            <h6 className="title theme-indigo">{title}</h6>
            <div className="desciption">{description}</div>
        </BenefitCardStyled>
    );
};
