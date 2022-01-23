import { MainCarouselStyled } from "./styles";

export const MainCarousel = ({ children, listingsSize, height }) => {

    return (
        <MainCarouselStyled
            height={height}
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