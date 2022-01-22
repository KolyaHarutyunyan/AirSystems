import React from "react";
import { CompanyFragment } from "@eachbase/fragments";
import { Header, HorizontalDivider } from "@eachbase/components";
import { Colors } from "@eachbase/utils";
import { Images } from "@eachbase/assets";

export const Company = () => {
   return (
      <>
         <Header
            img={Images.companyHeroWeb}
            titleCont={
               <div className="title-cont">
                  <HorizontalDivider length="80px" bb={`2px solid ${Colors.ThemeGreen}`} />
                  <h1 className="cont-text">Company</h1>
               </div>
            }
         />
         <CompanyFragment />
      </>
   );
};
