import { useCallback, useEffect, useState } from "react";
import {
    BestExperience,
    FreeQuotes,
    CustomersOpinion,
    ProvidingServices,
    WisetackFinancing,
    Partners,
} from "./core";
import { MainStyled } from "./styles";

export const Main = () => {
    const [width, setWidth] = useState(window?.innerWidth);

    const onResize = useCallback(() => {
        setWidth(window?.innerWidth);
    }, []);

    useEffect(() => {
        window.addEventListener("resize", onResize);
        return () => {
            window.removeEventListener("resize", onResize);
        };
    }, []);

    return (
        <MainStyled>
            <BestExperience />
            <FreeQuotes />
            <ProvidingServices />
            <WisetackFinancing />
            <CustomersOpinion width={width} />
            <Partners width={width} />
        </MainStyled>
    );
};
