import { Header, Main } from "@eachbase/components";
import { BigCardsContainer, TopSection } from "./core";

export const ServicesFragment = () => {
   return (
      <>
         <Header titleCont={"TitleContent"} content={"Content"} />
         <Main
            content={
               <>
                  <TopSection />
                  {/* <section className="cards-container"></section> */}
                  <BigCardsContainer />
               </>
            }
         />
      </>
   );
};
