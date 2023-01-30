import React from 'react';
import {List, Typography, Card as MUICard} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import {useStyles} from "../hooks/useStyles";
import {dateConverter} from "../utils/dateConverter";
import {createMarkup} from "../utils/markup";

export const Card = ({data, root}) => {
    const classes = useStyles();
    const navigate = useNavigate()
    const {by, url, score, title, time, descendants, id, text} = data

    return (
        <>
            <MUICard
                className={[classes.card, 'hover'].join(' ')}
                onClick={() => navigate(root ? `/story/${id}` : '#')}
            >
                {data &&
                    <List variant="outlined">
                        <Typography fontSize='25px' className={classes.card_title}>{title}</Typography>
                        {!root && text && <Typography fontSize='15px' dangerouslySetInnerHTML={createMarkup(text)} />}
                        <Typography
                            className={classes.card_info}>by: {by}</Typography>
                        <Typography className={classes.card_info} >posted on {dateConverter(time)}</Typography>
                        {root && score &&
                            <Typography className={classes.card_info}>rating: {score}</Typography>
                        }
                        {!root &&
                            <>
                                {descendants >= 0
                                    ? <Typography className={classes.card_info}>comments: {descendants}</Typography>
                                    : <Typography className={classes.card_info}>No comments</Typography>
                                }
                                {url &&
                                    <Link
                                        to={url}
                                        target='_blank'
                                        className={classes.card_link}
                                    >
                                        Read source
                                    </Link>
                                }
                            </>
                        }

                    </List>
                }
            </MUICard>
        </>
    );
};
