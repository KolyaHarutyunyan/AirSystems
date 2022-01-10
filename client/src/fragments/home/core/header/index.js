import styled from "styled-components";
import { Images } from "../../../../assets";
import { LowerHeader } from "./lowerHeader";
import { MainTitle } from "./mainTitle";
import { UpperHeader } from "./upperHeader";

const HeaderStyled = styled.header`
    /* background-image: url(${Images.someImage}); */
    background-color: gray;
    background-repeat: no-repeat;
    background-size: cover;
    height: 600px;
    /* position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    margin-top: 100px; */
    padding-left: 80px;
`;

export const Header = ({}) => {
    return (
        <HeaderStyled>
            <UpperHeader></UpperHeader>
            <MainTitle></MainTitle>
            <LowerHeader></LowerHeader>
        </HeaderStyled>
    );
};
