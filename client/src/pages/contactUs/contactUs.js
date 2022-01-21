import React from "react";
import { ContactUsFragment } from "@eachbase/fragments";
import { Header, HorizontalDivider } from "@eachbase/components";
import { Colors } from "@eachbase/utils";
import { Images } from "@eachbase/assets";

export const ContactUs = () => {
   return (
      <>
         <Header
            img={Images.contactusHeroWeb}
            titleCont={
               <div className="title-cont">
                  <HorizontalDivider length="80px" bb={`2px solid ${Colors.ThemeGreen}`} />
                  <h2 className="cont-text">Contact Us</h2>
               </div>
            }
         />
         <ContactUsFragment />
      </>
   );
};
