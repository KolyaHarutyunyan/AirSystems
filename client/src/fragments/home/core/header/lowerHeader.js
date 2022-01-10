import styled from "styled-components";
import { Images } from "../../../../assets";

const LowerHeaderStyled = styled.section`
    /* background-image: url(${Images.someImage}); */
    background-color: purple;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100px;
`;

export const LowerHeader = ({}) => {
    return (
        <LowerHeaderStyled>
        </LowerHeaderStyled>
    )
}