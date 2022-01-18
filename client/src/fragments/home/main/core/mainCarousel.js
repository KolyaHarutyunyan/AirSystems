import { MainCarouselStyled } from "./styles";

export const MainCarousel = ({ children, listingsSize }) => {

    return (
        <MainCarouselStyled
            slidesToShow={listingsSize}
            slidesToScroll={1}
            style={{ outline: "none" }}
            renderCenterLeftControls={() => false}
            renderCenterRightControls={() => false}
            slideIndex={0}
        >
            {children}
        </MainCarouselStyled>
    );
};
