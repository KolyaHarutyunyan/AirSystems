import React from "react";
import styled from "styled-components";
import { Colors } from "@eachbase/utils";
import { Routes } from "@eachbase/utils/routes";
import { RouteLink } from "@eachbase/components/anchors/routeLink";

const MainNavbarStyled = styled.div`
    background-color: ${Colors.BackgroundWhite};
    position: fixed;
    top: 24px;
    right: 0;
    padding-left: 4px;
    height: 60px;
    display: flex;
    align-items: center;
`;

export const MainNavBar = () => {

    return (
        <MainNavbarStyled
            aria-label="icon tabs example"
        >
            {Object.values(Routes).map(({ title, path }, index) => (
                <RouteLink key={path} title={title} where={path}></RouteLink>
            ))}
            <button>Request An Appointment</button>
        </MainNavbarStyled>
    );
};
