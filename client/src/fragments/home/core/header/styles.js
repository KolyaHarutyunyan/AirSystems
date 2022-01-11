import styled from "styled-components";
import { Images } from "@eachbase/assets";
import { Colors } from "@eachbase/utils";


export const HeaderStyled = styled.header`
    background-image: url(${Images.homepageHeroWeb});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: calc(100vw/2.4);
`;

export const HeroOverlayStyled = styled.section`
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

export const UpperHeaderStyled = styled.section`
    flex: 1;
    display: flex;
    justify-content: space-between;
`;

export const CompanyNameWrapperStyled = styled.h6`
    color: ${Colors.BackgroundPrimary};
    position: absolute;
    top: 43px;
`;