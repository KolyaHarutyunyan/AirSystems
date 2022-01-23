import { useWidth, CustomersOpinionListings } from "@eachbase/utils";
import { TitleDivider } from "@eachbase/components";
import { MainCarousel } from "./mainCarousel";
import { ListingsCardItem } from "./listingsCardItem";
import { CustomersOpinionStyled } from "./styles";

export const CustomersOpinion = () => {
   const width = useWidth();

   const listingsSize =
      width >= 645 && width < 980 ? 2 : width >= 980 && width < 1380 ? 3 : width >= 1380 ? 4 : 1;

   return (
      <CustomersOpinionStyled>
         <h2 className="customers-opinion-title-cont theme-indigo">
            <div className="customers-opinion-title">
               What <span className="theme-green">customers say</span> about us
            </div>
            <TitleDivider />
         </h2>
         <p className="customers-opinion-descr text-secondary">
            Every job we do is seen as an opportunity to develop a long term relationship with our
            customers. Customer service is our #1 priority so we take pride in going the extra mile
            and delivering quality work.
         </p>
         <div className="customers-opinion-carousel-cont">
            <MainCarousel listingsSize={listingsSize} height="240px">
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
