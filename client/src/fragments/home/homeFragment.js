import React, { useState, useEffect } from "react";
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

   const [animation, setAnimation] = useState(false);
   useEffect(() => setAnimation(true), []);

   const animationStyle = animation ? "slide-up" : "";
   const telInfo = Info.find(({ keyName }) => keyName === "Tell");

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
            minHeight={
               width >= 1280 ? "600px" : width >= 768 ? "400px" : "320px"
            }
            bgPosition={"center"}
            titleCont={
               <div className="split-animation">
                  <div className="split">
                     <div className={`split-item split-1 ${animationStyle}`}>
                        <h1>
                           <em>HVAC Experts</em>
                           Serving
                        </h1>
                     </div>
                  </div>
                  <div className="split">
                     <div className={`split-item split-2 ${animationStyle}`}>
                        <h1>the Los Angeles</h1>
                     </div>
                  </div>
                  <div className="split">
                     <div className={`split-item split-3 ${animationStyle}`}>
                        <h1>Community</h1>
                     </div>
                  </div>
               </div>
            }
            content={
               <>
                  <div className="contact-info">
                     <div className="info-logo-container">
                        <img src={Images.Icons.Info} alt="info" />
                     </div>
                     {Info.slice(0, 3).map(({ keyName, href, value }) => (
                        <div
                           key={keyName}
                           className={
                              "single-info " + "single-info__" + keyName
                           }
                        >
                           <span className="single-info__key">{keyName}:</span>
                           {href ? (
                              <a href={href} className="single-info__value">
                                 {value}
                              </a>
                           ) : (
                              <span className="single-info__value">
                                 {value}
                              </span>
                           )}
                        </div>
                     ))}
                  </div>
                  <div className="contact-info__mobile-view">
                     <a href={telInfo.href}>{telInfo.value}</a>
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
