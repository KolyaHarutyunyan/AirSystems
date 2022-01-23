import { useWidth } from "@eachbase/utils";
import { Images } from "@eachbase/assets";
import { TitleDivider } from "@eachbase/components";
import { MainCarousel } from "./mainCarousel";
import { PartnersStyled } from "./styles";

export const Partners = () => {
   const width = useWidth();
   const listingsSize =
      width >= 375 && width < 580
         ? 2
         : width >= 580 && width < 768
         ? 3
         : width >= 768 && width < 890
         ? 4
         : width >= 890 && width < 1100
         ? 5
         : width >= 1100 && width < 1280
         ? 6
         : width >= 1280
         ? 7
         : 1;
   return (
      <PartnersStyled>
         <h2 className="partners__title-cont">
            <div className="partners__title">
               <span className="theme-green">Partners</span>{" "}
               <span className="theme-indigo">we work with</span>
            </div>
            <TitleDivider />
         </h2>
         <p className="partners__descr text-secondary">
            We keep track of industry trends and make sure you are receiving the highest quality
            products with the latest technologies
         </p>
         <div className="partners__logos-cont">
            {width >= 1280 ? (
               <section className="instead-of-carousel-section">
                  {Object.entries(Images.PartnersLogos).map(([title, src]) => (
                     <div key={title} className="partner-logo-wrapper">
                        <img className="partner-logo" src={src} alt={title} />
                     </div>
                  ))}
               </section>
            ) : (
               <MainCarousel
                  listingsSize={listingsSize}
                  height="190px"
                  // showSlider={width >= 1280}
               >
                  {Object.entries(Images.PartnersLogos).map(([title, src]) => (
                     <div key={title} className="partner-logo-wrapper">
                        <img className="partner-logo" src={src} alt={title} />
                     </div>
                  ))}
               </MainCarousel>
            )}
         </div>
      </PartnersStyled>
   );
};
