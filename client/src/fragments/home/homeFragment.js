import { Header } from "@eachbase/components";
import { Main } from "./main";
import { Images } from "@eachbase/assets";
import { Info } from "@eachbase/utils";

export const HomeFragment = ({}) => {
    return (
        <>
            <Header
                img={Images.homepageHeroWeb}
                titleCont={
                    <h1 className="main-title">
                        <span className="theme-green">HVAC Experts</span>{" "}
                        <span className="bg-primary">
                            Serving the Los Angeles Community
                        </span>
                    </h1>
                }
                height={"600px"}
                content={
                    <div className="contact-info">
                        <div className="info-logo-container">
                            <img src={Images.Icons.Info} alt="info"></img>
                        </div>
                        {Object.entries(Info)
                            .slice(0, 3)
                            .map(([key, value]) => (
                                <div
                                    key={key}
                                    className={
                                        "single-info " + "single-info__" + key
                                    }
                                >
                                    <span className="single-info__key">
                                        {key}:
                                    </span>{" "}
                                    <span className="single-info__value">
                                        {value}
                                    </span>
                                </div>
                            ))}
                    </div>
                }
            />
            <Main />
        </>
    );
};
