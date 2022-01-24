import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import {
   Company,
   Home,
   PageNotFound,
   PrivacyPolicy,
   Services,
   TermsAndConds,
} from "@eachbase/pages";
import { ContactUs } from "../pages/contactUs/contactUs";

export const Routers = () => {
   return (
      <Switch>
         <Route path="/" exact component={Home} />
         <Route path="/services" exact component={Services} />
         <Route path="/contactUs" exact component={ContactUs} />
         <Route path="/company" exact component={Company} />
         <Route path="/termsAndConditions" exact component={TermsAndConds} />
         <Route path="/privacyPolicy" exact component={PrivacyPolicy} />
         <Route path="/404" exact component={PageNotFound} />
         <Redirect from="*" to={"/404"} />
      </Switch>
   );
};
