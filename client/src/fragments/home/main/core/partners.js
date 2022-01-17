import { Images } from "@eachbase/assets";
import { MainCarousel } from "./mainCarousel";
import { TitleDivider } from "./titleDivider";
import { PartnersStyled } from "./styles";

export const Partners = ({ width, onResize }) => {
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
                    <span className="theme-green">Partners</span>{" "}
                    <span className="theme-indigo">we work with</span>
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
