import React, { useState } from "react";
import { Images } from "@eachbase/assets";
import { MeetOurFounderStyled } from "./styles";
import { ViewMoreButton } from "@eachbase/components";

export const MeetOurFounder = () => {
   const [moreDesc, setMoreDesc] = useState(false);

   return (
      <MeetOurFounderStyled>
         <h2 className="founder-info-title__mobile-view">
            Meet <em>our founder</em> Sebo
         </h2>
         <div className="meet-our-founder-container">
            <div className="founder-info-box">
               <h2 className="founder-info-title__web-view">
                  Meet <em>our founder</em> Sebo
               </h2>
               <p className="founder-info-description first-desc">
                  Sebo has been in the HVAC industry for over 35 years. His love for designing and
                  assembling systems led him on a career path that would grow into the company which
                  it is today.
               </p>
               <p className="founder-info-description">
                  Sebo began installing and repairing air conditioning units in the Los Angeles area
                  and quickly acquired a client base that would grow quickly through word of mouth.
                  Delivering exceptional quality work and having stringent quality standards for his
                  team, he made SoCal Air the go-to choice for local households in the area.
               </p>
               <p className="founder-info-description">
                  Demand for other services such as ventilation and refrigeration quickly grew which
                  further expanded his service range, team and client base. Today SoCal Air has
                  completed hundreds of projects and is a leading HVAC service provider for
                  residential and commercial solutions in the Los Angeles area.
               </p>
               {moreDesc && (
                  <p className="founder-info-description">
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque dolor fugit
                     deleniti doloremque voluptate. Modi explicabo, eligendi doloremque eius
                     delectus excepturi, vero repellat saepe qui expedita est architecto
                     reprehenderit harum ad itaque! Vero, laborum magni quia assumenda dolorum
                     fugiat maxime ratione voluptatem dicta velit ut quod possimus sunt pariatur.
                     Eum aliquid id soluta, mollitia expedita minima neque. Impedit aperiam tempora
                     magni accusamus obcaecati neque aut, sint quae libero rem ducimus error itaque
                     consequuntur perspiciatis! Dolorum, impedit. Illo aut temporibus fuga!
                  </p>
               )}
               <div className="read-more-box">
                  <ViewMoreButton
                     onView={() => setMoreDesc((prevState) => !prevState)}
                     butnViewingText={`${moreDesc ? "Hide" : "Read More"}`}
                  />
               </div>
            </div>
            <div className="founder-image-box">
               <div className="founder-image-backdrop" />
               <img src={Images.companyFounderWeb} alt="" />
            </div>
         </div>
      </MeetOurFounderStyled>
   );
};
