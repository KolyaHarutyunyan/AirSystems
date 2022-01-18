import React, { useState } from "react";
import {
  SendButton,
  UserInput,
  UserInputsDropdown,
} from "@eachbase/components";
import { EstimateRequestStyled } from "./styles";
import { EmailValidator, enumValues, getPhoneErrorText } from "@eachbase/utils";
import { UserDropWrapper } from "@eachbase/components";

export const EstimateRequest = () => {
  const [inputs, setInputs] = useState({});
  const [error, setError] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [selectedBuildingType, setSelectedBuildingType] = useState("");
  const [selectedContactMethod, setSelectedContactMethod] = useState("");
  const [selectedAppointmentTime, setSelectedAppointmentTime] = useState("");

  const errorMsg = "This field must be not empty!";
  const dropdownErrorMsg = "One of the options must be chosen!";
  const phoneErrorMsg = getPhoneErrorText(inputs.phone);
  const emailErrorMsg = !EmailValidator.test(inputs.email)
    ? "Email must be an email!"
    : "";

  const phoneErrorText =
    error === "phone" ? errorMsg : error === phoneErrorMsg ? phoneErrorMsg : "";
  const emailErrorText =
    error === "email" ? errorMsg : error === emailErrorMsg ? emailErrorMsg : "";

  const handleChange = (evt) => {
    setInputs((prevState) => ({
      ...prevState,
      [evt.target.name]: evt.target.value,
    }));
    if (
      error === evt.target.name ||
      error === emailErrorMsg ||
      error === phoneErrorMsg
    ) {
      setError("");
    }
  };

  const handleUserRequestDataSend = () => {
    const userRequestData = {
      firstName: inputs.firstName,
      lastName: inputs.lastName,
      phone: inputs.phone,
      email: inputs.email,
      address: inputs.address,
      service: selectedService.toUpperCase(),
      buildingType: selectedBuildingType.toUpperCase(),
      contactMethod: selectedContactMethod.toUpperCase(),
      appointmentTime: selectedAppointmentTime.toUpperCase(),
    };

    const phoneIsValid =
      !!inputs.phone &&
      inputs.phone.trim().length >= 10 &&
      !/[a-zA-Z]/g.test(inputs.phone);
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
      console.log("userRequestData  ", userRequestData);
    } else {
      setError(errorText);
    }
  };

  return (
    <EstimateRequestStyled>
      <div className="estimate-request-container">
        <div className="estimate-request-box">
          <h2 className="estimate-request-title">
            Request an <em>estimate</em>
          </h2>
          <p className="estimate-request-description">
            All estimate requests will be reviewed by one of our expert
            technicians and response will be sent within 24 hours. For larger
            projects or custom solutions we may ask for more information or
            schedule a site visit in order to better understand the project
            requirements.
          </p>
        </div>
        <div className="estimate-request-inputs-box">
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
          <UserInput
            required={true}
            inputLabel={"Address"}
            inputType={"text"}
            inputName={"address"}
            inputValue={inputs.inputName}
            onInputChange={handleChange}
            inputError={error === "address" && errorMsg}
          />
          <UserDropWrapper
            required={true}
            userDropTitle={"Service"}
            hasError={error === "service"}
            userDropErrorMsg={dropdownErrorMsg}
          >
            <UserInputsDropdown
              dropdownOptions={enumValues.SERVICES}
              onPass={(selected) => {
                setSelectedService(selected);
                setError("");
              }}
              selected={selectedService}
              dropdownTitle={"Select Service"}
              dropdownError={error === "service"}
            />
          </UserDropWrapper>
          <UserDropWrapper
            required={true}
            userDropTitle={"Type of Building"}
            hasError={error === "buildingType"}
            userDropErrorMsg={dropdownErrorMsg}
          >
            <UserInputsDropdown
              dropdownOptions={enumValues.BUILDING_TYPES}
              onPass={(selected) => {
                setSelectedBuildingType(selected);
                setError("");
              }}
              selected={selectedBuildingType}
              dropdownTitle={"Select Building"}
              dropdownError={error === "buildingType"}
            />
          </UserDropWrapper>
          <UserDropWrapper
            required={true}
            userDropTitle={"Preferred Contact Method"}
            hasError={error === "contactMethod"}
            userDropErrorMsg={dropdownErrorMsg}
          >
            <UserInputsDropdown
              dropdownOptions={enumValues.CONTACT_METHODS}
              onPass={(selected) => {
                setSelectedContactMethod(selected);
                setError("");
              }}
              selected={selectedContactMethod}
              dropdownTitle={"Select Contact Method"}
              dropdownError={error === "contactMethod"}
            />
          </UserDropWrapper>
          <UserDropWrapper
            required={true}
            userDropTitle={"Preferred Appointment Time"}
            hasError={error === "appointmentTime"}
            userDropErrorMsg={dropdownErrorMsg}
          >
            <UserInputsDropdown
              dropdownOptions={enumValues.APPOINTMENT_TIMES}
              onPass={(selected) => {
                setSelectedAppointmentTime(selected);
                setError("");
              }}
              selected={selectedAppointmentTime}
              dropdownTitle={"Select Time"}
              dropdownError={error === "appointmentTime"}
            />
          </UserDropWrapper>
        </div>
        <SendButton
          butnType={"button"}
          butnSendingText={"Request an Estimate"}
          onClickButn={handleUserRequestDataSend}
          // loader={}
        />
      </div>
    </EstimateRequestStyled>
  );
};
