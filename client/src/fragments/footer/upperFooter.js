import React, { useState } from "react";
import { Divider, TextField } from "@mui/material";
import { SendButton, UserInput } from "@eachbase/components";
import { Colors, EmailValidator, Info, isNotEmpty } from "@eachbase/utils";
import { Images } from "@eachbase/assets";
import { UpperFooterStyled, LogoLinkStyled } from "./styles";
import axios from "axios";

export const UpperFooter = () => {
   const [isLoading, setIsLoading] = useState(false);
   const [backError, setBackError] = useState("");
   const [success, setSuccess] = useState("");
   const [enteredEmail, setEnteredEmail] = useState("");
   const [error, setError] = useState("");

   const errorMsg = "This field must be not empty!";
   const emailErrorMsg = !EmailValidator.test(enteredEmail)
      ? "Email must be an email!"
      : "";
   const emailErrorText =
      error === "email"
         ? errorMsg
         : error === emailErrorMsg
         ? emailErrorMsg
         : "";

   const handleEmailChange = (evt) => {
      setEnteredEmail(evt.target.value);
      setError("");
      setBackError("");
      setSuccess("");
   };

   const handleSubscribtion = () => {
      const emailIsValid =
         isNotEmpty(enteredEmail) && EmailValidator.test(enteredEmail);

      const errorText = !enteredEmail
         ? "email"
         : !emailIsValid
         ? emailErrorMsg
         : "Input is not field";

      if (emailIsValid) {
         setIsLoading(true);
         setBackError("");
         setSuccess("");
         axios
            .post(`/mailer/newsletter/${enteredEmail}`)
            .then(() => {
               setIsLoading(false);
               setBackError("");
               setSuccess("Your request has been sent successfully!");
               setEnteredEmail("");
            })
            .catch(() => {
               setIsLoading(false);
               setBackError("Whoops! Something went wrong! Please, try again!");
               setSuccess("");
            });
      } else {
         setError(errorText);
      }
   };

   return (
      <UpperFooterStyled>
         <div className="socal-media">
            <div className="socal-la">
               <h5 className="theme-green">SoCal Air Systems Group, Inc.</h5>
               <span className="quality">{"LA's best pricing & quality"}</span>
            </div>
            <h6 className="follow-container__socal-comp indigo-heading">
               Follow us:
               <div className="logos-container">
                  {Images.FollowLogos.map(({ href, logos }, index) => (
                     <LogoLinkStyled
                        target="_blank"
                        href={href}
                        key={index}
                        logos={logos}
                     />
                  ))}
               </div>
            </h6>
         </div>
         <div className="contact-subscribe-box">
            <div className="contact-us">
               <h6 className="contact-us-title">Contact us</h6>
               <div className="contact-info">
                  {Info.map(
                     ({ keyName, href, value }) =>
                        href && (
                           <div
                              key={keyName}
                              className={
                                 "single-info " + "single-info__" + keyName
                              }
                           >
                              <span className="single-info__key">
                                 {keyName}:
                              </span>{" "}
                              {keyName === "Address" ? (
                                 <span className="single-info__value">
                                    {value}
                                 </span>
                              ) : (
                                 <a href={href} className="single-info__value">
                                    {value}
                                 </a>
                              )}
                           </div>
                        )
                  )}
               </div>
               <Divider
                  style={{
                     paddingTop: "24px",
                     color: "#6D82974D",
                  }}
               />
               <div className="availability-info">
                  {Info.map(
                     ({ keyName, href, value }) =>
                        !href && (
                           <div
                              key={keyName}
                              className={
                                 "single-info " + "single-info__" + keyName
                              }
                           >
                              <span className="single-info__key">
                                 {keyName}:
                              </span>{" "}
                              <span className="single-info__value">
                                 {value}
                              </span>
                           </div>
                        )
                  )}
               </div>
            </div>
            <div className="newsletter">
               <h6 className="indigo-heading">Subscribe to our newsletter</h6>
               <p className="description">
                  Get the latest insights on HVAC maintenance and deals. We
                  promise not to spam your inbox!
               </p>
               <div className="email-input-container">
                  <div className="subscribe-input-box">
                     <UserInput
                        inputClassName={"subscribe"}
                        required={true}
                        inputType={"email"}
                        inputName={"email"}
                        inputValue={enteredEmail}
                        onInputChange={handleEmailChange}
                        inputPlaceholder={"Enter your email address"}
                        inputError={emailErrorText}
                     />
                     <SendButton
                        butnClassName={`${isLoading && "btn-load-time"}`}
                        butnType={"button"}
                        butnSendingText={"Subscribe"}
                        onClickButn={handleSubscribtion}
                        loader={isLoading}
                     />
                  </div>
               </div>

               {/* ** temporary feedback ** */}
               <h6
                  style={{
                     textAlign: "center",
                     color: Colors.ThemeRed,
                     minHeight: "20px",
                  }}
               >
                  {!!backError && backError}
               </h6>
               <h6
                  style={{
                     textAlign: "center",
                     color: Colors.ThemeGreen,
                     minHeight: "20px",
                  }}
               >
                  {!!success && success}
               </h6>
               {/* ** end ** */}

               <h6 className="follow-container__subscribe-comp indigo-heading">
                  Follow us:
                  <div className="logos-container">
                     {Images.FollowLogos.map(({ href, logos }, index) => (
                        <LogoLinkStyled
                           target="_blank"
                           href={href}
                           key={index}
                           logos={logos}
                        />
                     ))}
                  </div>
               </h6>
            </div>
         </div>
      </UpperFooterStyled>
   );
};
