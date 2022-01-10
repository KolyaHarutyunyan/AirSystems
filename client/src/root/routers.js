import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Home } from "@eachbase/pages";
import { Services } from "@eachbase/pages/services";

export const Routers = ({}) => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            {/*<Redirect to={"/"} />*/}
        </Switch>
    );
};
