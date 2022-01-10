import styled from 'styled-components';
import {homeStyles} from "./styles";
import {HomeFragment} from "@eachbase/fragments";

const HomeStyled = styled.div`
    width: 100%;
    min-height: 100vh;
`;

export const Home = () => {
    const classes = homeStyles()

    return (
        <HomeStyled>
            <HomeFragment/>
        </HomeStyled>
    )
}
