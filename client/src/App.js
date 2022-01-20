import React from "react";
import { Footer } from "@eachbase/fragments";
import { Routers } from "./root/routers";
import { AppStyled } from "./styles";

function App() {
   return (
      <AppStyled>
         <Routers />
         <Footer />
      </AppStyled>
   );
}

export default App;
