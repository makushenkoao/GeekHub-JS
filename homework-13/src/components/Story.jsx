import React, {useEffect} from 'react';
import {Header} from "./Header";
import {Card} from "./Card";
import {Comments} from "./Comments";
import {getComments, getStory} from "../services/api";
import {Alert, Container, CircularProgress, Typography} from "@mui/material";
import {useParams} from "react-router-dom";
import {TreeView} from "@mui/lab";
import {useDispatch, useSelector} from "react-redux";
import {useStyles} from "../hooks/useStyles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export const Story = () => {
    const {id} = useParams()
    const classes = useStyles();
    const dispatch = useDispatch();

    const {
        story,
        comments,
        storyIsLoading,
        storyIsError,
        commentsAreLoading,
        commentsAreError,
        subCommentsAreLoading,
        subCommentsAreError,
    } = useSelector(state => state.stories)


    useEffect(() => {
        dispatch(getStory(id))
    }, [])

    useEffect(() => {
        story && story.kids &&
        dispatch(getComments(story.kids))
    }, [story])

    return (
        <Container>
            <Header />
            {storyIsError && <Alert severity="error">{storyIsError}</Alert>}
            {commentsAreError && <Alert severity="error">{commentsAreError}</Alert>}
            {subCommentsAreError && <Alert severity="error">{subCommentsAreError}</Alert>}
            {storyIsLoading &&
                <Typography component='span' className={classes.circular_progress}>
                    <CircularProgress color="inherit" size={60}/>
                </Typography>
            }
            {commentsAreLoading && !storyIsLoading && comments.length > 0 &&
                <Typography component='span' className={classes.circular_progress}>
                    <CircularProgress color="inherit" size={60}/>
                </Typography>
            }
            {story &&
                <Card
                    data={story}
                    root={false}
                />
            }

            {story && story.kids &&
                <>
                    <Typography fontSize='20px'>Comments:</Typography>
                    <TreeView
                        defaultCollapseIcon={<ExpandMoreIcon />}
                        defaultExpandIcon={<ChevronRightIcon />}
                    >
                        <Comments
                            comments={comments}
                        />
                    </TreeView>
                </>
            }
        </Container>
    );
};