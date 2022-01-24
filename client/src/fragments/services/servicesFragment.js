import { Images } from "@eachbase/assets";
import { Header, Main, HorizontalDivider } from "@eachbase/components";
import { Colors, useWidth } from "@eachbase/utils";
import { BigCardsContainer, TopSection } from "./core";

export const ServicesFragment = () => {
   const width = useWidth();
   return (
      <>
         <Header
            img={
               width >= 1280
                  ? Images.serviceHeroWeb
                  : width >= 768
                  ? Images.serviceHeroTablet
                  : Images.serviceHeroMobile
            }
            minHeight={width >= 1280 ? "500px" : width >= 768 ? "400px" : "276px"}
            bgPosition={"left"}
            titleCont={
               <h1 className="main-title">
                  <div className="title-cont">
                     <HorizontalDivider
                        length={width >= 768 ? "80px" : "48px"}
                        bb={`2px solid ${Colors.ThemeGreen}`}
                     />
                     <span className="bg-primary">Services</span>
                  </div>
               </h1>
            }
         />
         <Main
            content={
               <>
                  <TopSection />
                  <BigCardsContainer />
               </>
            }
         />
      </>
   );
};
