import { useWidth, CustomersOpinionListings } from "@eachbase/utils";
import { TitleDivider } from "@eachbase/components";
import { MainCarousel } from "./mainCarousel";
import { ListingsCardItem } from "./listingsCardItem";
import { CustomersOpinionStyled } from "./styles";

export const CustomersOpinion = () => {
   const width = useWidth();

   const reviewsToShow =
      width >= 370 && width < 440
         ? 1.1
         : width >= 440 && width < 540
         ? 1.3
         : width >= 540 && width < 660
         ? 1.6
         : width >= 660 && width < 740
         ? 2
         : width >= 740 && width < 840
         ? 2.2
         : width >= 840 && width < 980
         ? 2.4
         : width >= 980 && width < 1100
         ? 2.8
         : width >= 1100 && width < 1200
         ? 3.2
         : width >= 1200 && width < 1440
         ? 3.5
         : width >= 1440
         ? 4
         : 1;

   return (
      <CustomersOpinionStyled>
         <h2 className="customers-opinion-title-cont theme-indigo">
            <div className="customers-opinion-title">
               What <span className="theme-green">customers say</span> about us
            </div>
            <TitleDivider />
         </h2>
         <p className="customers-opinion-descr text-secondary">
            Every job we do is seen as an opportunity to develop a long term
            relationship with our customers. Customer service is our #1 priority
            so we take pride in going the extra mile and delivering quality
            work.
         </p>
         <div className="customers-opinion-carousel-cont">
            <MainCarousel itemsToShow={reviewsToShow} height="240px">
               {CustomersOpinionListings.map((listing) => (
                  <ListingsCardItem
                     key={listing.id}
                     rate={listing.rate}
                     comment={listing.comment}
                     author={listing.author}
                  />
               ))}
            </MainCarousel>
         </div>
      </CustomersOpinionStyled>
   );
};
