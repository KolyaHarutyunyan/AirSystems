import { HeaderStyled } from "./styles";
import { UpperHeader } from "./upperHeader";
import { HeroOverlayStyled } from "./styles";
import { Info } from "@eachbase/utils";
import { Images } from "@eachbase/assets";

export const Header = ({}) => {
    return (
      <HeaderStyled>
         <HeroOverlayStyled>
            <UpperHeader />
            <h1 className="main-title">
               <span className="theme-green">HVAC Experts</span>{" "}
               <span className="bg-primary">Serving the Los Angeles Community</span>
            </h1>
            <p className="lower-header">
               <div className="contact-info">
                  <div className="info-logo-container">
                     <img src={Images.Icons.Info} alt="info" />
                  </div>
                  {Object.entries(Info)
                     .slice(0, 3)
                     .map(([key, value]) => (
                        <div key={key} className={"single-info " + "single-info__" + key}>
                           <span className="single-info__key">{key}:</span>{" "}
                           <span className="single-info__value">{value}</span>
                        </div>
                     ))}
               </div>
            </p>
         </HeroOverlayStyled>
      </HeaderStyled>
   );
};
