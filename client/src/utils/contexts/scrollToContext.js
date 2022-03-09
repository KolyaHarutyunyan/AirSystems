import React from "react";

export const ScrollToContext = React.createContext({
   scrollTo: "",
   handleScrollTo: () => {},
});

export const ScrollToContextProvider = ({ children }) => {
   const [scrollTo, setScrollTo] = React.useState("");

   const handleScrollTo = (section) => setScrollTo(section);

   const context = { scrollTo, handleScrollTo };

   return (
      <ScrollToContext.Provider value={context}>
         {children}
      </ScrollToContext.Provider>
   );
};
