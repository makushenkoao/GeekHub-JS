import React from 'react';
import {Container, Typography} from "@mui/material";
import {useStyles} from "../../hooks/useStyles";

export const ErrorFetching = ({error}) => {
    const classes = useStyles();
    return (
        <Container>
            <Typography
                variant='h3'
                color='red'
                className={classes.errorMessage}
            >
                {error}
            </Typography>
        </Container>
    );
};
