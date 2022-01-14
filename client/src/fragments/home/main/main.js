import styled from "styled-components";
import { BestExperience } from "./bestExperience";
import { FreeQuotes } from "./freeQuotes";
import { ProvidingServices } from "./providingServices";

const MainStyled = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Main = () => {
    return (
        <MainStyled>
            <BestExperience />
            <FreeQuotes />
            {/* <section className="providing-services"></section> */}
            <ProvidingServices/>
            <section className="wisetack-financing"></section>
            <section className="customers-opinion"></section>
            <section className="partners"></section>
        </MainStyled>
    );
};
