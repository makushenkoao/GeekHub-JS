import React, {useEffect} from 'react';
import {getSubComments} from '../services/api';
import {createMarkup} from "../utils/markup";
import {Comments} from "./Comments";
import {Typography, List, ListItem, ListItemAvatar, Avatar, ListItemText} from "@mui/material";
import {TreeItem} from "@mui/lab";
import {useDispatch, useSelector} from "react-redux";
import {dateConverter} from "../utils/dateConverter";

export const Comment = ({comments}) => {
    const {text, by, time, id, kids} = comments
    const dispatch = useDispatch();
    const {
        subComments,
        subCommentsAreLoading
    } = useSelector(state => state.stories)

    useEffect(() => {
        if (kids) dispatch(getSubComments(kids))
    }, [dispatch, kids])

    const filterSubComments = subComments.filter(item => item.data.parent === id);

    return (
        <>
            {comments && !comments.deleted && !comments.dead &&
                <>
                    <TreeItem
                        nodeId={String(id)}
                        disabled={subCommentsAreLoading}
                        label={
                            <List >
                                {by &&
                                    <>
                                        <ListItem alignItems='flex-start'>
                                            <ListItemAvatar>
                                                <Avatar />
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary={by}
                                                secondary={
                                                    <Typography component='span' variant='body2'>
                                                        {dateConverter(time)}
                                                    </Typography>
                                                }
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText
                                                primary={
                                                    <Typography
                                                        dangerouslySetInnerHTML={createMarkup(text)}
                                                    />
                                                }
                                            />
                                        </ListItem>
                                    </>
                                }
                            </List>
                    }
                    >
                        {kids && <Comments comments={filterSubComments} />}
                    </TreeItem>
                </>
            }
        </>
    );
};