import { FreeQuotesStyled } from "./styles";

export const FreeQuotes = () => {
    return (
        <FreeQuotesStyled>
            <div className="free-quotes__title-cont">
                <h4 className="free-quotes__title theme-indigo">
                    SoCal Air provides{" "}
                    <span className="theme-green">
                        free quotes and estimates
                    </span>{" "}
                    on commercial, residential and industrial projects
                </h4>
            </div>
            <div className="free-quotes__img-cont" />
            <div className="free-quotes__absolute-cont background-primary">
                <h6 className="free-quotes__absolute-cont__title text-primary">
                    NPAA Certified Technicians
                </h6>
                <p className="free-quotes__absolute-cont__descr text-tertiary">
                    We only hire trained professionals that can handle the job
                    at hand and deliver a successful outcome.
                </p>
            </div>
        </FreeQuotesStyled>
    );
};
