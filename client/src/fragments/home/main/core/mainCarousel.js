import { useEffect, useState } from "react";
import { CustomersOpinionListings } from "@eachbase/utils";
import { ListingsCardItem } from "./listingsCardItem";
import { MainCarouselStyled } from "./styles";

export const MainCarousel = () => {
    const [width, setWidth] = useState(window?.innerWidth);

    const listingsSize =
        width >= 768 && width < 1209
            ? 2
            : width >= 1209 && width < 1430
            ? 3
            : width >= 1430
            ? 4
            : 1;

    useEffect(() => {
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth);
        });
    }, []);
    return (
        <MainCarouselStyled
            slidesToShow={listingsSize}
            slidesToScroll={1}
            style={{ outline: "none" }}
            renderCenterLeftControls={() => false}
            renderCenterRightControls={() => false}
            slideIndex={0}
        >
            {CustomersOpinionListings.map((listing) => (
                <ListingsCardItem
                    key={listing.id}
                    // listingId={listing.id}
                    rate={listing.rate}
                    comment={listing.comment}
                    author={listing.author}
                    // size={sizeDisplay}
                />
            ))}
        </MainCarouselStyled>
    );
};
