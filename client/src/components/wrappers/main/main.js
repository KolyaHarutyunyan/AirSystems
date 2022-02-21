import React, { useEffect } from "react";
import { MainStyled } from "./styles";

export const Main = ({ content }) => {
   const scrollToTop = () => window.scrollTo(0, 0);
   useEffect(scrollToTop, []);

   return <MainStyled>{content}</MainStyled>;
};
