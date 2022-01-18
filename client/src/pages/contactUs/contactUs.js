import React from "react";
import { ContactUsFragment } from "@eachbase/fragments";
import { Header } from "@eachbase/components";

export const ContactUs = () => {
  return (
    <>
      <Header
        img={""}
        titleCont={""}
        height={"420px"}
        content={<p>content</p>}
      />
      <ContactUsFragment />
    </>
  );
};
