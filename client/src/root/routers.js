import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Company, ContactUs, Home, Services } from "@eachbase/pages";

export const Routers = ({}) => {
   return (
      <Switch>
         <Route path="/" exact component={Home} />
         <Route path="/contact-us" exact component={ContactUs} />
         <Route path="/about" exact component={Company} />
         {/*<Redirect to={"/"} />*/}
      </Switch>
   );
};
