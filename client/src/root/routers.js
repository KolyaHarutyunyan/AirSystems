import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Company, ContactUs, Home, Services, TermsAndConds } from "@eachbase/pages";

export const Routers = () => {
   return (
      <Switch>
         <Route path={["/", "/home"]} exact component={Home} />
         <Route path="/services" exact component={Services} />
         <Route path="/contactUs" exact component={ContactUs} />
         <Route path="/company" exact component={Company} />
         <Route path="/termsAndConditions" exact component={TermsAndConds} />
         {/*<Redirect to={"/"} />*/}
      </Switch>
   );
};
