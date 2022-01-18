import { CustomersOpinionStyled } from "./styles";
import { TitleDivider } from "./titleDivider";
import { MainCarousel } from "./mainCarousel";
import { ListingsCardItem } from "./listingsCardItem";
import { CustomersOpinionListings } from "@eachbase/utils";

export const CustomersOpinion = ({ width }) => {
    const listingsSize =
        width >= 768 && width < 1209
            ? 2
            : width >= 1209 && width < 1430
            ? 3
            : width >= 1430
            ? 4
            : 1;

            
    return (
        <CustomersOpinionStyled>
            <h2 className="customers-opinion-title-cont theme-indigo">
                <div className="customers-opinion-title">
                    What <span className="theme-green">customers say</span>{" "}
                    about us
                </div>
                <TitleDivider />
            </h2>
            <p className="customers-opinion-descr text-secondary">
                Every job we do is seen as an opportunity to develop a long term
                relationship with our customers. Customer service is our #1
                priority so we take pride in going the extra mile and delivering
                quality work.
            </p>
            <div className="customers-opinion-carousel-cont">
                <MainCarousel listingsSize={listingsSize} >
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
