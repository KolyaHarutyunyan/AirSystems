import React, { useState } from "react";
import { SendButton, UserInput, UserInputsDropdown, TitleDivider } from "@eachbase/components";
import { EstimateRequestStyled } from "./styles";
import { Colors, EmailValidator, enumValues, getPhoneErrorText } from "@eachbase/utils";
import axios from "axios";

export const EstimateRequest = () => {
   const [inputs, setInputs] = useState({});
   const [error, setError] = useState("");
   const [isLoading, setIsLoading] = useState(false);
   const [backError, setBackError] = useState("");
   const [success, setSuccess] = useState("");

   const [selectedService, setSelectedService] = useState("");
   const [selectedBuildingType, setSelectedBuildingType] = useState("");
   const [selectedContactMethod, setSelectedContactMethod] = useState("");
   const [selectedAppointmentTime, setSelectedAppointmentTime] = useState("");

   const errorMsg = "This field must be not empty!";
   const dropdownErrorMsg = "One of the options must be chosen!";
   const phoneErrorMsg = getPhoneErrorText(inputs.phone);
   const emailErrorMsg = !EmailValidator.test(inputs.email) ? "Email must be an email!" : "";

   const phoneErrorText =
      error === "phone" ? errorMsg : error === phoneErrorMsg ? phoneErrorMsg : "";
   const emailErrorText =
      error === "email" ? errorMsg : error === emailErrorMsg ? emailErrorMsg : "";

   const handleChange = (evt) => {
      setInputs((prevState) => ({
         ...prevState,
         [evt.target.name]: evt.target.value,
      }));
      if (error === evt.target.name || error === emailErrorMsg || error === phoneErrorMsg) {
         setError("");
      }
   };

   const handleUserRequestDataSend = () => {
      const userRequestData = {
         firstName: inputs.firstName,
         lastName: inputs.lastName,
         phoneNumber: inputs.phone,
         email: inputs.email,
         address: inputs.address,
         serviceType: selectedService,
         buildingType: selectedBuildingType,
         contactMethod: selectedContactMethod,
         apptTime: selectedAppointmentTime,
      };

      const phoneIsValid =
         !!inputs.phone && inputs.phone.trim().length >= 10 && !/[a-zA-Z]/g.test(inputs.phone);
      const emailIsValid = !!inputs.email && EmailValidator.test(inputs.email);
      const userRequestDataIsValid =
         !!inputs.firstName &&
         !!inputs.lastName &&
         phoneIsValid &&
         emailIsValid &&
         !!inputs.address &&
         !!selectedService &&
         !!selectedBuildingType &&
         !!selectedContactMethod &&
         !!selectedAppointmentTime;

      const errorText = !inputs.firstName
         ? "firstName"
         : !inputs.lastName
         ? "lastName"
         : !inputs.phone
         ? "phone"
         : !phoneIsValid
         ? phoneErrorMsg
         : !inputs.email
         ? "email"
         : !emailIsValid
         ? emailErrorMsg
         : !inputs.address
         ? "address"
         : !selectedService
         ? "service"
         : !selectedBuildingType
         ? "buildingType"
         : !selectedContactMethod
         ? "contactMethod"
         : !selectedAppointmentTime
         ? "appointmentTime"
         : "Input is not field";

      if (userRequestDataIsValid) {
         setIsLoading(true);
         setBackError("");
         setSuccess("");
         axios
            .post("/mailer/estimate", userRequestData)
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
      <EstimateRequestStyled>
         <div className="estimate-request-container">
            <div className="estimate-request-box">
               <div className="estimate-request-title-box">
                  <h2 className="estimate-request-title">
                     Request an <em>estimate</em>
                  </h2>
                  <TitleDivider />
               </div>
               <p className="estimate-request-description">
                  All estimate requests will be reviewed by one of our expert technicians and
                  response will be sent within 24 hours. For larger projects or custom solutions we
                  may ask for more information or schedule a site visit in order to better
                  understand the project requirements.
               </p>
            </div>
            <div className="estimate-request-inputs-box">
               <div className="user-request-inputs-box">
                  <div>
                     <UserInput
                        required={true}
                        inputLabel={"First Name"}
                        inputType={"text"}
                        inputName={"firstName"}
                        inputValue={inputs.inputName}
                        onInputChange={handleChange}
                        inputError={error === "firstName" && errorMsg}
                     />
                     <UserInput
                        required={true}
                        inputLabel={"Last Name"}
                        inputType={"text"}
                        inputName={"lastName"}
                        inputValue={inputs.inputName}
                        onInputChange={handleChange}
                        inputError={error === "lastName" && errorMsg}
                     />
                  </div>
                  <div>
                     <UserInput
                        required={true}
                        inputLabel={"Phone Number"}
                        inputType={"number"}
                        inputName={"phone"}
                        inputValue={inputs.inputName}
                        onInputChange={handleChange}
                        inputError={phoneErrorText}
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
               </div>
               <div className="address-input-box">
                  <UserInput
                     required={true}
                     inputLabel={"Address"}
                     inputType={"text"}
                     inputName={"address"}
                     inputValue={inputs.inputName}
                     onInputChange={handleChange}
                     inputError={error === "address" && errorMsg}
                  />
               </div>
               <div className="user-request-inputs-box">
                  <div>
                     <UserInputsDropdown
                        required={true}
                        dropdownOptions={enumValues.SERVICES}
                        onPass={(selected) => {
                           setSelectedService(selected);
                           setError("");
                        }}
                        selected={selectedService}
                        userDropTitle={"Service"}
                        dropdownTitle={"Select Service"}
                        dropdownError={error === "service"}
                        userDropErrorMsg={dropdownErrorMsg}
                     />
                     <UserInputsDropdown
                        required={true}
                        dropdownOptions={enumValues.BUILDING_TYPES}
                        onPass={(selected) => {
                           setSelectedBuildingType(selected);
                           setError("");
                        }}
                        selected={selectedBuildingType}
                        userDropTitle={"Type of Building"}
                        dropdownTitle={"Select Building"}
                        dropdownError={error === "buildingType"}
                        userDropErrorMsg={dropdownErrorMsg}
                     />
                  </div>
                  <div>
                     <UserInputsDropdown
                        required={true}
                        dropdownOptions={enumValues.CONTACT_METHODS}
                        onPass={(selected) => {
                           setSelectedContactMethod(selected);
                           setError("");
                        }}
                        selected={selectedContactMethod}
                        userDropTitle={"Preferred Contact Method"}
                        dropdownTitle={"Select Contact Method"}
                        dropdownError={error === "contactMethod"}
                        userDropErrorMsg={dropdownErrorMsg}
                     />
                     <UserInputsDropdown
                        required={true}
                        dropdownOptions={enumValues.APPOINTMENT_TIMES}
                        onPass={(selected) => {
                           setSelectedAppointmentTime(selected);
                           setError("");
                        }}
                        selected={selectedAppointmentTime}
                        userDropTitle={"Preferred Appointment Time"}
                        dropdownTitle={"Select Time"}
                        dropdownError={error === "appointmentTime"}
                        userDropErrorMsg={dropdownErrorMsg}
                     />
                  </div>
               </div>
            </div>
            <h6 style={{ textAlign: "center", color: Colors.ThemeRed, minHeight: "20px" }}>
               {!!backError && backError}
            </h6>
            <h6 style={{ textAlign: "center", color: Colors.ThemeGreen, minHeight: "20px" }}>
               {!!success && success}
            </h6>
            <div className="user-action-box">
               <SendButton
                  butnClassName={`${isLoading && "btn-load-time"}`}
                  butnType={"button"}
                  butnSendingText={"Request an Estimate"}
                  onClickButn={handleUserRequestDataSend}
                  loader={isLoading}
               />
            </div>
         </div>
      </EstimateRequestStyled>
   );
};
