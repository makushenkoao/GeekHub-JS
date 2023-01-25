import React from 'react';
import {Container, CssBaseline, Link, List, Toolbar, Typography} from "@mui/material";
import BurgerButton from "burger-react";
import 'burger-react/dist/style.css'
import {ThemeMode} from "../ThemeMode";
import {useStyles} from "../../hooks/useStyles";

export const MobileNavbarList = ({handleClick, onClickDarkButton, onClickLightButton, isActiveDarkMode}) => {
    const classes = useStyles()
    return (
        <>
            <BurgerButton
                onClick={handleClick}
            />
            <CssBaseline />
            <Container fixed maxWidth='1200px'>
                <Toolbar className={classes.mobileToolbar}>
                    <Typography variant='h4'>Logo</Typography>
                    <List
                        variant='span'
                        className={classes.mobileList}
                    >
                        <Link to='#'
                              component='button'
                              underline='hover'
                              fontSize={'20px'}
                        >Docs</Link>
                        <Link to='#'
                              component='button'
                              underline='hover'
                              fontSize={'20px'}
                        >Contacts</Link>
                        <Link to='#'
                              component='button'
                              underline='hover'
                              fontSize={'20px'}
                        >About us</Link>
                        <Link to='#'
                              component='button'
                              underline='hover'
                              fontSize={'20px'}
                        >Blog</Link>
                    </List>
                    <Typography
                        compoent='span'
                        className={classes.mobileThemeMode}>
                        <ThemeMode
                            onClickLightButton={onClickLightButton}
                            onClickDarkButton={onClickDarkButton}
                            isActiveDarkMode={isActiveDarkMode}
                        />
                    </Typography>
                </Toolbar>
            </Container>
        </>
    );
};