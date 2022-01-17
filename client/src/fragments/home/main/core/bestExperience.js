import { Benefits } from "@eachbase/utils";
import { BenefitCard } from "@eachbase/components";
import { BestExperienceStyled } from "./styles";

export const BestExperience = () => {
    return (
        <BestExperienceStyled>
            <h2 className="best-exp-title theme-indigo">
                How we serve you the best experience
            </h2>
            <div className="benefits-contaner">
                {Benefits.map((ben) => (
                    <BenefitCard key={ben.title} ben={ben} />
                ))}
            </div>
        </BestExperienceStyled>
    );
};
