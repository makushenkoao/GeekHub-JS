import React from 'react';
import {Alert} from "@mui/material";
import {useStyles} from "../hooks/useStyles";

export const NotFound = () => {
    const classes = useStyles()
    return (
        <Alert
            className={classes.notFoundMessage}
            severity="error"
        >
            Not found page. Try again
        </Alert>
    )
};
