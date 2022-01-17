import styled from "styled-components";
import { BestExperience } from "./bestExperience";
import { CustomersOpinion } from "./customersOpinion";
import { FreeQuotes } from "./freeQuotes";
import { ProvidingServices } from "./providingServices";
import { WisetackFinancing } from "./wisetackFinancing";

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
            <ProvidingServices/>
            <WisetackFinancing />
            {/* <section className="customers-opinion"></section> */}
            <CustomersOpinion/>
            <section className="partners"></section>
        </MainStyled>
    );
};
