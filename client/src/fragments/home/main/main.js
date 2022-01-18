import { useState } from "react"
import { BestExperience, FreeQuotes, CustomersOpinion, ProvidingServices, WisetackFinancing, Partners } from "./core";
import { MainStyled } from "./styles"

export const Main = () => {
    const [width, setWidth] = useState (window?.innerWidth);

    const onResize = () => { setWidth(window?.innerWidth) }

    return (
        <MainStyled>
            <BestExperience />
            <FreeQuotes />
            <ProvidingServices/>
            <WisetackFinancing />
            <CustomersOpinion width={width} onResize={onResize}/>
            <Partners width={width} onResize={onResize}/>
        </MainStyled>
    );
};
