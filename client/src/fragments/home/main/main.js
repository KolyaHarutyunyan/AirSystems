import { BestExperience, CustomersOpinion, FreeQuotes, ProvidingServices, WisetackFinancing } from "./core";
import { MainStyled } from "./styles"

export const Main = () => {
    return (
        <MainStyled>
            <BestExperience />
            <FreeQuotes />
            <ProvidingServices/>
            <WisetackFinancing />
            <CustomersOpinion/>
            <section className="partners"></section>
        </MainStyled>
    );
};
