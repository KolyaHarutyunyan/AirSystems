import React, { useState } from "react";
import { SendButton, TitleDivider, UserInput } from "@eachbase/components";
import { QuickMessageStyled } from "./styles";
import { Colors, EmailValidator } from "@eachbase/utils";
import axios from "axios";

export const QuickMessage = () => {
   const [inputs, setInputs] = useState({
      name: "",
      email: "",
      message: "",
   });
   const [error, setError] = useState("");
   const [isLoading, setIsLoading] = useState(false);
   const [backError, setBackError] = useState("");
   const [success, setSuccess] = useState("");

   const errorMsg = "This field must be not empty!";
   const emailErrorMsg = !EmailValidator.test(inputs.email)
      ? "Email must be an email!"
      : "";

   const emailErrorText =
      error === "email"
         ? errorMsg
         : error === emailErrorMsg
         ? emailErrorMsg
         : "";

   const handleChange = (evt) => {
      setInputs((prevState) => ({
         ...prevState,
         [evt.target.name]: evt.target.value,
      }));
      if (error === evt.target.name || error === emailErrorMsg) {
         setError("");
      }
   };

   const handleUserMessageDataSend = () => {
      const userMessageData = {
         name: inputs.name,
         email: inputs.email,
         message: inputs.message,
      };

      const emailIsValid = !!inputs.email && EmailValidator.test(inputs.email);
      const userMessageDataIsValid =
         !!inputs.name && emailIsValid && !!inputs.message;

      const errorText = !inputs.name
         ? "name"
         : !inputs.email
         ? "email"
         : !emailIsValid
         ? emailErrorMsg
         : !inputs.message
         ? "message"
         : "Input is not field";

      if (userMessageDataIsValid) {
         setIsLoading(true);
         setBackError("");
         setSuccess("");
         axios
            .post("/mailer/contactForm", userMessageData)
            .then(() => {
               setIsLoading(false);
               setBackError("");
               setSuccess("Your request has been sent successfully!");
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
      <QuickMessageStyled>
         <div className="quick-message-container">
            <div className="quick-message-box">
               <div className="quick-message-title-box">
                  <h2 className="quick-message-title">
                     Send us a quick <em>message</em>
                  </h2>
                  <TitleDivider />
               </div>
               <p className="quick-message-description">
                  Please allow up to 24 hours for responses.
               </p>
            </div>
            <div className="quick-message-inputs-box">
               <div className="name-email-box">
                  <UserInput
                     required={true}
                     inputLabel={"Name"}
                     inputType={"text"}
                     inputName={"name"}
                     inputValue={inputs.inputName}
                     onInputChange={handleChange}
                     inputError={error === "name" && errorMsg}
                  />
                  <UserInput
                     required={true}
                     inputLabel={"Email Address"}
                     inputType={"text"}
                     inputName={"email"}
                     inputValue={inputs.inputName}
                     onInputChange={handleChange}
                     inputError={emailErrorText}
                  />
               </div>
               <div className="message-box">
                  <UserInput
                     required={true}
                     inputLabel={"Message"}
                     inputName={"message"}
                     inputValue={inputs.inputName}
                     onInputChange={handleChange}
                     inputPlaceholder={"Your message here ..."}
                     inputError={error === "message" && errorMsg}
                     isTextArea={true}
                  />
               </div>
            </div>
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
            <div className="user-action-box">
               <SendButton
                  butnClassName={`${isLoading && "btn-load-time"}`}
                  butnType={"button"}
                  butnSendingText={"Submit"}
                  onClickButn={handleUserMessageDataSend}
                  loader={isLoading}
               />
            </div>
         </div>
      </QuickMessageStyled>
   );
};
