import { HeaderStyled } from "./styles";
import { HeroOverlay } from "./heroOverlay";
import { LowerHeader } from "./lowerHeader";
import { MainTitle } from "./mainTitle";
import { UpperHeader } from "./upperHeader";

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
