import { useState, useCallback, useEffect } from "react";

export const useAnimation = (scrollHeight = 0) => {
   const [animation, setAnimation] = useState(false);

   const onScroll = useCallback(() => {
      setAnimation(window.scrollY >= scrollHeight);
   }, []);

   useEffect(() => {
      window.addEventListener("scroll", onScroll);
      return () => {
         window.removeEventListener("scroll", onScroll);
      };
   }, []);

   return animation;
};
