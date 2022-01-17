import styled from "styled-components";
import { Colors, TextFonts, WisetackFeatures } from "@eachbase/utils";
import { TitleDivider } from "./core/titleDivider";
import { Images } from "@eachbase/assets";

const WisetackFinancingStyled = styled.section`
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
        max-width: 465px;
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

    .wisetack-financing-features-list-item{
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

export const WisetackFinancing = () => {
    return (
        <WisetackFinancingStyled>
            <h2 className="wisetack-financing-title-cont">
                <div className="wisetack-financing-title">
                    <span className="theme-green">We offer</span>{" "}
                    <span className="theme-indigo">financing</span>
                </div>
                <TitleDivider />
            </h2>
            <p className="wisetack-financing-descr text-secondary">
                Pay in installments for your purchases. It takes just a minute
                to see your options and checking eligibility won’t impact your
                credit score. Learn more about financing through Wisetack.
            </p>
            <div className="wisetack-financing-img-cont">
                <div className="wisetack-financing-img" />
                <ul className="wisetack-financing-features-list">
                    {WisetackFeatures.map((text) => (
                        <li
                            key={text}
                            className="wisetack-financing-features-list-item text-secondary"
                        >
                            {text}
                        </li>
                    ))}
                </ul>
            </div>
            <h4 className="wisetack-financing-end">
                <span className="theme-indigo">FLEXIBLE FINANCING THROUGH</span>{" "}
                <span className="theme-light-blue">WISETACK</span>
            </h4>
        </WisetackFinancingStyled>
    );
};
