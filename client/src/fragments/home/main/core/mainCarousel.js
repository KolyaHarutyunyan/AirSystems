import { useEffect } from "react";
import { MainCarouselStyled } from "./styles";

export const MainCarousel = ({ children, listingsSize, onResize }) => {

    useEffect(() => {
        window.addEventListener("resize", onResize);
        return () => { window.removeEventListener("resize", onResize) }
    }, []);
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
