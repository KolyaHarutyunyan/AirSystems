import styled from "styled-components";
import { BestExperience } from "./bestExperience";

const MainStyled = styled.main`
    width: 100%;
    height: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Main = () => {
    return (
        <MainStyled>
            {/* <section className="best-experience"></section> */}
            <BestExperience />
            <section className="free-quotes"></section>
            <section className="providing-services"></section>
            <section className="wisetack-financing"></section>
            <section className="customers-opinion"></section>
            <section className="partners"></section>
        </MainStyled>
    );
};
