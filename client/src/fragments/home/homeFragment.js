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
import { Info, useWidth } from "@eachbase/utils";

export const HomeFragment = ({}) => {
   const width = useWidth();
   const telInfo = Info.find(({ keyName }) => keyName === "Tell");
   const daysInfo = Info.find(({ keyName }) => keyName === "Days");

   return (
      <>
         <Header
            img={
               width >= 1280
                  ? Images.homepageHeroWeb
                  : width >= 768
                  ? Images.homepageHeroTablet
                  : Images.homepageHeroMobile
            }
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
                     {Info.slice(0, 3).map(({ keyName, href, value }) => (
                        <div key={keyName} className={"single-info " + "single-info__" + keyName}>
                           <span className="single-info__key">{keyName}:</span>{" "}
                           {href ? (
                              <a href={href} className="single-info__value">
                                 {value}
                              </a>
                           ) : (
                              <span className="single-info__value">{value}</span>
                           )}
                        </div>
                     ))}
                  </div>
                  <div className="contact-info__mobile-view">
                     <a href={telInfo.href}>{telInfo.value}</a>
                     <span>{daysInfo.value}</span>
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
