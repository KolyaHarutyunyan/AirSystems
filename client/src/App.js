import React from "react";
import { Footer, MainNavBar } from "@eachbase/fragments";
import { Routers } from "./root/routers";
import { AppStyled } from "./styles";

function App() {
   return (
      <AppStyled>
         <MainNavBar />
         <Routers />
         <Footer />
      </AppStyled>
   );
}

export default App;
