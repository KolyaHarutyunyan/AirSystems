import { WisetackFeatures } from "@eachbase/utils";
import { TitleDivider } from "./titleDivider";
import { WisetackFinancingStyled } from "./styles";


export const WisetackFinancing = () => {
    return (
        <WisetackFinancingStyled>
            <h2 className="wisetack-financing-title-cont">
                <div className="wisetack-financing-title">
                    <span className="theme-green">We offer</span>{" "}
                    <span className="theme-indigo">financing</span>
                </div>
                <TitleDivider />
            </h2>
            <p className="wisetack-financing-descr text-secondary">
                Pay in installments for your purchases. It takes just a minute
                to see your options and checking eligibility won’t impact your
                credit score. Learn more about financing through Wisetack.
            </p>
            <div className="wisetack-financing-img-cont">
                <div className="wisetack-financing-img" />
                <ul className="wisetack-financing-features-list">
                    {WisetackFeatures.map((text) => (
                        <li
                            key={text}
                            className="wisetack-financing-features-list-item text-secondary"
                        >
                            {text}
                        </li>
                    ))}
                </ul>
            </div>
            <h4 className="wisetack-financing-end">
                <span className="theme-indigo">FLEXIBLE FINANCING THROUGH</span>{" "}
                <span className="theme-light-blue">WISETACK</span>
            </h4>
        </WisetackFinancingStyled>
    );
};
