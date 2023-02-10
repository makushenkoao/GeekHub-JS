import React from 'react';
import {AppBar, Toolbar, Typography, Tooltip} from "@mui/material";
import {useStyles} from "../hooks/useStyles";
import {useNavigate, useParams} from "react-router-dom";
import ReplayIcon from '@mui/icons-material/Replay';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export const Header = ({reloadStories, reloadComments}) => {
    const {id} = useParams()
    const navigate = useNavigate()
    const classes = useStyles()

    return (
        <>
            <AppBar position='static' color='transparent' sx={{mb : 2}}>
                <Toolbar className={classes.toolbar}>
                    <Typography variant='h5' sx={{fontWeight: 'bold'}}>Hacker News</Typography>
                    {!id
                        ?
                        <Tooltip title="Reload page" className={classes.icon}>
                            <ReplayIcon
                                className={classes.cursor}
                                color='transparent'
                                fontSize="large"
                                onClick={reloadStories}
                            />
                        </Tooltip>
                        :
                        <Typography
                            component='span'
                            style={{display: 'flex', gap: 10}}
                        >
                            <Tooltip title="Come back" className={classes.icon}>
                                <ArrowBackIcon
                                    className={classes.cursor}
                                    color='transparent'
                                    fontSize="large"
                                    onClick={() => navigate('/')}
                                />
                            </Tooltip>
                            <Tooltip title="Reload comments" className={classes.icon}>
                                <ReplayIcon
                                    className={classes.cursor}
                                    color='transparent'
                                    fontSize="large"
                                    onClick={reloadComments}
                                />
                            </Tooltip>
                        </Typography>
                    }
                </Toolbar>
            </AppBar>
        </>
    );
};
