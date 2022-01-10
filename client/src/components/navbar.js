import React from "react";
import styled from "styled-components";
import { Tab, Tabs } from "@mui/material";
import { Colors } from "@eachbase/utils";
import { Routes } from "@eachbase/utils/routes";

const NavbarStyled = styled(Tabs)`
    background-color: ${Colors.BackgroundWhite};
    position: fixed;
    top: 24px;
    right: 0;
`;

export const NavBar = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <NavbarStyled
            value={value}
            onChange={handleChange}
            aria-label="icon tabs example"
        >
            {Object.values(Routes).map(({ title, path }, index) => (
                <Tab
                    style={{ textTransform: "none" }}
                    key={index}
                    where={path}
                    label={title}
               />
            ))}
        </NavbarStyled>
    );
};
