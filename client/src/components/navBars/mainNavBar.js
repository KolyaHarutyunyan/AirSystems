import React from "react";
import { Routes } from "@eachbase/utils/routes";
import { RouteLink } from "@eachbase/components/anchors/routeLink";
import { MainNavbarStyled } from "./styles";
import { Button } from "../buttons";
import { Colors } from "@eachbase/utils";


export const MainNavBar = () => {

    return (
        <MainNavbarStyled
            aria-label="icon tabs example"
        >
            {Object.values(Routes).map(({ title, path }, index) => (
                <RouteLink key={path} title={title} where={path}></RouteLink>
            ))}
            <Button bgColor={Colors.ThemeGreen} color={Colors.BackgroundPrimary}>Request An Appointment</Button>
        </MainNavbarStyled>
    );
};
