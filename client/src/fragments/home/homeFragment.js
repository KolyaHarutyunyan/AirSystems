import { Header, Main } from "@eachbase/components";
import {
   BestExperience,
   FreeQuotes,
   CustomersOpinion,
   ProvidingServices,
   WisetackFinancing,
   Partners,
} from "./core";
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
                  <span className="bg-primary">Serving the Los Angeles Community</span>
               </h1>
            }
            content={
               <>
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
                  <div className="contact-info__mobile-view">
                     <span>(818) 223 - 5212</span>
                     <span>Mon - Fri</span>
                  </div>
               </>
            }
         />

         <Main
            content={
               <>
                  <BestExperience />
                  <FreeQuotes />
                  <ProvidingServices />
                  <WisetackFinancing />
                  <CustomersOpinion />
                  <Partners />
               </>
            }
         />
      </>
   );
};
