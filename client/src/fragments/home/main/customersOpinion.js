import { useEffect, useState } from "react";
import styled from "styled-components";
import Carousel from "nuka-carousel";
import { Colors, TextFonts } from "@eachbase/utils";
import { TitleDivider } from "./core/titleDivider";
import { CustomersOpinionListings } from "@eachbase/utils/listings";
import { ListingsCardItem } from "./core/listingsCardItem";

let width = "100px";

const listingsSize =
    width >= 450 && width < 480
        ? 1.1
        : width >= 480 && width < 510
        ? 1.2
        : width >= 510 && width < 580
        ? 1.3
        : width >= 580 && width < 650
        ? 1.5
        : width >= 650 && width < 768
        ? 1.7
        : width >= 768 && width < 800
        ? 2
        : width >= 800 && width < 890
        ? 2.1
        : width >= 890 && width < 989
        ? 2.2
        : width >= 989 && width < 1049
        ? 2.6
        : width >= 1049 && width < 1209
        ? 2.8
        : width >= 1209 && width < 1330
        ? 3
        : width >= 1330 && width < 1430
        ? 3.5
        : width >= 1430
        ? 4
        : 1;

const CustomersOpinionStyled = styled.section`
    width: 100%;
    height: 415px;
    padding: 0 80px;
    margin-top: 126px;

    .theme-indigo {
        color: ${Colors.ThemeIndigo};
    }

    .theme-green {
        color: ${Colors.ThemeGreen};
    }

    .customers-opinion-title-cont {
        line-height: 49px;
        display: flex;
        align-items: center;
        margin-bottom: 16px;
    }
    .customers-opinion-title {
        padding-right: 16px;
    }

    .customers-opinion-descr {
        line-height: 24px;
        font-weight: ${TextFonts["p1.3"].fontWeight};
        max-width: 465px;
    }
`;

export const CustomersOpinion = () => {
    const [width, setWidth] = useState(window?.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth);
        });
    }, []);
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
            <Carousel
                slidesToShow={listingsSize}
                slidesToScroll={1}
                style={{ outline: "none" }}
                renderBottomCenterControls={() => true}
                renderCenterLeftControls={() => false}
                renderCenterRightControls={() => false}
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
            </Carousel>
        </CustomersOpinionStyled>
    );
};
