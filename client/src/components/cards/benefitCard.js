import { BenefitCardStyled } from "./styles";

export const BenefitCard = ({ ben }) => {
    let { logo, title, description } = ben;
    return (
        <BenefitCardStyled>
            <div className="logo-container">
                <img className="logo" src={logo} alt="logo" />
            </div>
            <h6 className="title theme-indigo">{title}</h6>
            <div className="desciption">{description}</div>
        </BenefitCardStyled>
    );
};
