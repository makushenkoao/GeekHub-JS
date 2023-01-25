import React from 'react';
import {Navbar} from "../Navbar";
import {ErrorFetching} from "../ErrorFetching";
import {CircularProgress, Typography} from "@mui/material";
import {ChangePage} from "../ChangePage";
import {AlignItemsList} from "../AlignItemsList";

export const Page = ({
     isActiveBurger,
     onClickLightButton,
     onClickDarkButton,
     responseData,
     isLoading,
     error,
     isMobileSize,
     handleClick,
     isActiveDarkMode,
     page,
     setPage
 }) => {
    return (
        <>
            <Navbar
                isActiveDarkMode={isActiveDarkMode}
                onClickLightButton={onClickLightButton}
                onClickDarkButton={onClickDarkButton}
                isMobileSize={isMobileSize}
                isActiveBurger={isActiveBurger}
                handleClick={handleClick}
            />
            {isLoading
                ?
                <Typography
                    variant='span'
                    sx={{display: 'block', textAlign: 'center'}}
                >
                    <CircularProgress size='8rem' color="primary"/>
                </Typography> :
                <>
                <ChangePage
                    page={page}
                    setPage={setPage}
                    responseData={responseData}
                />
                <AlignItemsList
                    responseData={responseData}/>
                </>
            }
            {error && <ErrorFetching error={error}/>}
        </>
    );
};