import { MainCarouselStyled } from "./styles";

export const MainCarousel = ({ children, itemsToShow }) => {
   return (
      <MainCarouselStyled
         slidesToShow={itemsToShow}
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
