import styled from "styled-components";

const HeroOverlayStyled = styled.section`
    /* background-color: purple;
    background-repeat: no-repeat;
    background-size: cover; */
    padding-left: 80px;
    display: flex;
    flex-direction: column;
    height: 100%;
    background: transparent linear-gradient(90deg, #000000b3 0%, #00000033 100%)
        0% 0% no-repeat padding-box;
`;

export const HeroOverlay = ({children}) => {
    return <HeroOverlayStyled>{children}</HeroOverlayStyled>;
};
