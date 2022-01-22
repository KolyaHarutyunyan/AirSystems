import { ChessImgSectionStyled } from "./styles";

export const ChessImgSection = ({ img, bg, reverse }) => {
   return (
      <ChessImgSectionStyled bg={bg} reverse={reverse}>
         <div className={`layer ${reverse ? "left-top" : "right-bottom"}`} />
         <img src={img} alt="title" />
      </ChessImgSectionStyled>
   );
};