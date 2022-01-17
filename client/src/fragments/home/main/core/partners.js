import { Images } from "@eachbase/assets";
import { Colors, TextFonts } from "@eachbase/utils";
import styled from "styled-components";
import { MainCarousel } from "./mainCarousel";
import { TitleDivider } from "./titleDivider";

const PartnersStyled = styled.section`
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

export const Partners = ({ width, onResize}) => {
    const listingsSize =
        width >= 768 && width < 1209
            ? 2
            : width >= 1209 && width < 1430
            ? 3
            : width >= 1430
            ? 4
            : 1;
    return (
        <PartnersStyled>
            <h2 className="partners__title-cont">
                <div className="partners__title">
                    <span className="theme-green">We offer</span>{" "}
                    <span className="theme-indigo">financing</span>
                </div>
                <TitleDivider />
            </h2>
            <p className="partners__descr text-secondary">
                We keep track of industry trends and make sure you are receiving
                the highest quality products with the latest technologies
            </p>
            <div className="partners__logo-cont">
                <MainCarousel listingsSize={listingsSize} onResize={onResize}>
                    {Object.entries(Images.Logos.PartnersLogos).map(
                        ([title, src]) => (
                            <div className="partner-logo-wrapper">
                                <img
                                    className="partner-logo"
                                    src={src}
                                    alt={title}
                                />
                            </div>
                        )
                    )}
                </MainCarousel>
            </div>
        </PartnersStyled>
    );
};
