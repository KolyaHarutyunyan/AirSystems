import React from "react";
import { Main, TitleDivider } from "@eachbase/components";
import { PrivacyPolicyContainerStyled } from "./styles";

export const PrivacyPolicyFragment = () => {
   return (
      <Main
         content={
            <PrivacyPolicyContainerStyled>
               <div className="logo-box">
                  <h6 className="logo">SoCal Air Systems</h6>
               </div>
               <div className="privacy-policy-box">
                  <div className="privacy-policy-title-box">
                     <h2 className="privacy-policy-title">{"Privacy Policy"}</h2>
                     <TitleDivider />
                  </div>
                  <div className="privacy-policy-info-box">
                     <p className="privacy-policy-description">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book.
                     </p>
                     <p className="privacy-policy-description">
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has
                        roots in a piece of classical Latin literature from 45 BC, making it over
                        2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
                        College in Virginia, looked up one of the more obscure Latin words,
                        consectetur, from a Lorem Ipsum passage, and going through the cites of the
                        word in classical literature, discovered the undoubtable source. Lorem Ipsum
                        comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
                        (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a
                        treatise on the theory of ethics, very popular during the Renaissance. The
                        first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                        in section 1.10.32.
                     </p>
                  </div>
               </div>
            </PrivacyPolicyContainerStyled>
         }
      />
   );
};
