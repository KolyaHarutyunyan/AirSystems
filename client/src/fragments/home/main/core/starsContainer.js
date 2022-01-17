import { Images } from "@eachbase/assets";

export const StarsContainer = ({ rate }) => {
    return (
        <div className="stars-container">
            {new Array(5).fill("").map((_, i) => (
                <img
                    className={"star-img"}
                    key={i}
                    src={
                        i + 1 > rate
                            ? Images.Icons.EmptyStar
                            : Images.Icons.FullStar
                    }
                />
            ))}
        </div>
    );
};
