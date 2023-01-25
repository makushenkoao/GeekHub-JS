import React from 'react';
import BurgerButton from "burger-react";
import 'burger-react/dist/style.css'
import {CssBaseline} from "@mui/material";

export const MobileNavbar = ({handleClick}) => {
    return (
        <>
            <CssBaseline />
            <BurgerButton
                onClick={handleClick}
            />
        </>
    );
};