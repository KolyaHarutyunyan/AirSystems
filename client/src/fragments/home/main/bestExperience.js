import styled from "styled-components";
import { Colors } from "@eachbase/utils";
import { Benefits } from "@eachbase/utils";
import { BenefitCard } from "../../../components/cards/benefitCard";

const BestExperienceStyled = styled.section`
    width: 66%;
    min-width: 954px;
    margin-top: 128px;
    .theme-indigo {
        color: ${Colors.ThemeIndigo};
    }
    & .best-exp-title {
        width: 361px;
        line-height: 50px;
        margin-bottom: 32px;
    }
    .benefits-contaner {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
`;

export const BestExperience = () => {
    return (
        <BestExperienceStyled>
            <h2 className="best-exp-title theme-indigo">
                How we serve you the best experience
            </h2>
            <div className="benefits-contaner">
                {Benefits.map((ben) => (
                    <BenefitCard ben={ben} />
                ))}
            </div>
        </BestExperienceStyled>
    );
};
