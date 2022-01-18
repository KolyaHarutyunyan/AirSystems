import { Images } from "@eachbase/assets";
import { MainCarousel } from "./mainCarousel";
import { TitleDivider } from "./titleDivider";
import { PartnersStyled } from "./styles";


export const Partners = ({ width }) => {
    const listingsSize =
        width >= 768 && width < 1209
            ? 2
            : width >= 900 && width < 1280
            ? 5
            : width >= 1280 && width < 1440
            ? 6
            : width >= 1440
            ? 7
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
                <MainCarousel listingsSize={listingsSize} >
                    {Object.entries(Images.Logos.PartnersLogos).map(
                        ([title, src]) => (
                            <div key={title} className="partner-logo-wrapper">
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
