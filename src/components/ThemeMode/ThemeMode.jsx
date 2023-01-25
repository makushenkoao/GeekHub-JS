import React from 'react';
import {Button} from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export const ThemeMode = ({onClickDarkButton, onClickLightButton, isActiveDarkMode}) => {
    return (
        <>
            <Button
                sx={!isActiveDarkMode ? {backgroundColor: 'orange'} : null}
                onClick={onClickLightButton}
                variant='contained'
                startIcon={<LightModeIcon/>}
            >
                Light theme
            </Button>
            <Button
                sx={isActiveDarkMode ? {backgroundColor: 'orange'} : null}
                onClick={onClickDarkButton}
                variant='contained'
                startIcon={<DarkModeIcon/>}
            >
                Dark theme
            </Button>
        </>
    );
};