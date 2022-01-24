import { useHistory } from "react-router";
import { Images } from "@eachbase/assets";
import { Main, SendButton } from "@eachbase/components";
import React from "react";
import { PageNotFoundContainerStyled } from "./styles";

export const PageNotFoundFragment = () => {
   const history = useHistory();

   return (
      <Main
         content={
            <PageNotFoundContainerStyled>
               <div className="logo-box">
                  <h6 className="logo">SoCal Air Systems</h6>
               </div>
               <div className="page-not-found-info-box">
                  <div className="page-not-found-info-content">
                     <div className="page-not-found-image-box">
                        <img src={Images.error404} alt="" />
                     </div>
                     <div className="page-not-found-info">
                        <h2 className="info-title">Ooops!</h2>
                        <div className="info-subtitle-desc-box">
                           <h5 className="info-subtitle">Page not found on server</h5>
                           <p className="info-desc">We can't find the page you are looking for.</p>
                        </div>
                        <SendButton
                           butnType={"button"}
                           butnSendingText={"Go to Home"}
                           onClickButn={() => history.push("/home")}
                        />
                     </div>
                  </div>
               </div>
            </PageNotFoundContainerStyled>
         }
      />
   );
};
