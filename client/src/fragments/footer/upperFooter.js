import React from "react";
import styled from "styled-components";
import { Colors, TextFonts } from "../../utils/globalUi";
import TextField from "@mui/material/TextField";
import { Button } from "@eachbase/components/buttons";

const UpperFooterStyled = styled.div`
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

    & h6 {
        color: ${Colors.ThemeGreen};
    }

    .quality {
        line-height: 20px;
        ${TextFonts["p1.1"]};
        color: ${Colors.TextPrimary};
    }

    .follow-container {
    }

    .contact-us {
        width: 346px;
        background-color: yellow;
    }
    .newsletter {
        width: 465px;
    }

    & .description {
        color: ${Colors.TextTertiary};
        ${TextFonts["p1.3"]}
    }

    & .email-input-container {
        width: 100%;
        height: 44px;
        display: flex;
        align-items: center;
    }

    .subscribe {
        margin: 0;
        padding: 12px 40px;
    }

    .MuiOutlinedInput-input{
        padding: 15px 0 13px 16px;
        ${TextFonts["p1.3"]}
    };
}

`;

export const UpperFooter = () => {
    return (
        <UpperFooterStyled>
            <div className="socal-media">
                <div className="socal-la">
                    <h6>SoCal Air Systems</h6>
                    <span className="quality">{"LA's best pricing & quality"}</span>
                </div>
                <h6 className="follow-container indigo-heading">Follow</h6>
            </div>
            <div className="contact-us"></div>
            <div className="newsletter">
                <h6 className="indigo-heading">Subscribe to our newsletter</h6>
                <p className="description">
                    Get the latest insights on HVAC maintenance and deals. We
                    promise not to spam your inbox!
                </p>
                <div className="email-input-container">
                    <TextField fullWidth name="user-email" placeholder="Enter your email address"/>
                    <Button className="subscribe" bgColor={Colors.ThemeGreen} color={Colors.BackgroundPrimary}>Subscribe</Button>
                </div>
            </div>
        </UpperFooterStyled>
    );
};
