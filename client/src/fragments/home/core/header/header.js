import styled from "styled-components";
import { Images } from "../../../../assets";
import { HeroOverlay } from "./heroOverlay";
import { LowerHeader } from "./lowerHeader";
import { MainTitle } from "./mainTitle";
import { UpperHeader } from "./upperHeader";

const HeaderStyled = styled.header`
    background-image: url(${Images.homepageHeroWeb});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: calc(100vw/2.4);
`;

export const Header = ({}) => {
    return (
        <HeaderStyled>
            <HeroOverlay>
                <UpperHeader></UpperHeader>
                <MainTitle></MainTitle>
            </HeroOverlay>
            <LowerHeader></LowerHeader>
        </HeaderStyled>
    );
};
