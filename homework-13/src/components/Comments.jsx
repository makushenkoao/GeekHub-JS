import React from 'react';
import {Comment} from './Comment';
import {useStyles} from "../hooks/useStyles";
import {Card} from "@mui/material";

export const Comments = ({comments}) => {

    const classes = useStyles();
    return (
        <>
            {comments && comments.map(({data}) =>
                <Card component='span' key={data.id} className={classes.marginBottom}>
                    <Comment comments={data} />
                </Card>
            )}
        </>
    );
};
