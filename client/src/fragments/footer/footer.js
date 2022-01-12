import styled from "styled-components";
import { Divider } from "@mui/material";
import { Colors, TextFonts } from "@eachbase/utils";

let { fontSize, fontWeight } = TextFonts.p2;

const FooterStyled = styled.footer`
    align-self: flex-end;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${Colors.BackgroundSecondary};
    width: 100%;
    height: 390px;
    padding: 80px 80px 13px 80px;
    & .upper-footer {
        /* background-color: brown; */
        height: 247px;
    }
    & .lower-footer {
        color: ${Colors.TextTertiary};
        line-height: 24px;
        font-size: ${fontSize};
        font-weight: ${fontWeight};
        width: 100%;
        height: 62px;
        /* background-color: yellowgreen; */
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

export const Footer = () => {
    return (
        <FooterStyled>
            <div className="upper-footer"></div>
            {/* <div className="footer-divider"></div> */}
            <Divider
                style={{
                    borderColor: Colors.Divider,
                }}
            />
            <div className="lower-footer">
                <span className="rights">
                    SoCal Air Systems 2021. All rights reserved.
                </span>
                <div className="rules">
                    <span className="conditions">{"Terms & Conditions"}</span>
                    <span className="privacy">Privacy Policy</span>
                </div>
            </div>
        </FooterStyled>
    );
};
