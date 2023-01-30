import React, {useEffect} from 'react';
import {Container, CircularProgress, Alert, Typography} from "@mui/material";
import {Header} from "./Header";
import {Card} from "./Card";
import {useStyles} from "../hooks/useStyles";
import {useDispatch, useSelector} from "react-redux";
import {getStories} from "../services/api";

export const Stories = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const {
        stories,
        storiesAreLoading,
        storiesAreError,
    } = useSelector(state => state.stories);

    useEffect(() => {
        dispatch(getStories())
    }, []);

    const reloadStories = () => {
        dispatch(getStories())
    }

    useEffect(() => {
        setInterval(() => {
            reloadStories()
        }, 60000)
    }, [])


    return (
        <Container>
            <Header
                reloadStories={reloadStories}
            />
            {storiesAreError && <Alert severity="error">{storiesAreError}</Alert>}
            {storiesAreLoading
                ?
                <Typography component='span' className={classes.circular_progress}>
                    <CircularProgress color="inherit" size={60}/>
                </Typography>
                :
                <>
                    {stories && stories.map(({data}) =>
                        <Card
                            key={data.id}
                            data={data}
                            root
                        />
                    )}
                </>
            }
        </Container>
    );
};
