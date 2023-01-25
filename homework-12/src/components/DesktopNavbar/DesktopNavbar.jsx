import React from 'react';
import {CssBaseline} from '@mui/material';
import {ThemeMode} from '../ThemeMode';
import {useStyles} from '../../hooks/useStyles';
import {Container, Link, Typography, Toolbar, AppBar, List} from '@mui/material';

export const DesktopNavbar = ({onClickLightButton, onClickDarkButton, isActiveDarkMode}) => {
    const classes = useStyles();
    return (
        <AppBar position='static' className={classes.navbar}>
            <Container fixed maxWidth='1200px'>
                <CssBaseline />
                <Toolbar >
                    <Typography variant='h4' className={classes.logo}>Logo</Typography>
                    <List className={classes.navItems}>
                        <Link
                            to='#'
                            component='button'
                            color='white'
                            underline='hover'
                            fontSize='20px'
                        >Docs</Link>
                        <Link
                            to='#'
                            component='button'
                            color='white'
                            underline='hover'
                            fontSize='20px'
                        >Contacts</Link>
                        <Link
                            to='#'
                            component='button'
                            color='white'
                            underline='hover'
                            fontSize='20px'
                        >About us</Link>
                        <Link
                            to='#'
                            component='button'
                            color='white'
                            underline='hover'
                            fontSize='20px'
                        >Blog</Link>
                        <ThemeMode
                            onClickLightButton={onClickLightButton}
                            onClickDarkButton={onClickDarkButton}
                            isActiveDarkMode={isActiveDarkMode}
                        />
                    </List>
                </Toolbar>
            </Container>
        </AppBar>

    );
}