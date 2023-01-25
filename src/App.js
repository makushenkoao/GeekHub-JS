import * as React from 'react';
import {useEffect, useState} from "react";
import {createTheme, ThemeProvider} from "@mui/material";
import {useFetching} from "./hooks/useFetching";
import {Page} from "./components/Page";
import {MobileNavbarList} from "./components/MobileNavbarList";
import Axios from "./API/axios";

export function App() {
    const [isActiveBurger, setIsActiveBurger] = useState(false)
    const [isActiveDarkMode, setIsActiveDarkMode] = useState(false);
    const [isMobileSize, setIsMobileSize] = useState(false);
    const [page, setPage] = useState(1);

    const handleClick = () => {
        setIsActiveBurger(!isActiveBurger)
    }

    let theme = createTheme({
        palette: {
            mode: isActiveDarkMode ? 'dark' : 'light',
        },
    });

    const onClickLightButton = () => setIsActiveDarkMode(false);
    const onClickDarkButton = () => setIsActiveDarkMode(true);

    const [responseData, setResponseData] = React.useState('');
    const [fetching, isLoading, error] = useFetching(async () => {
        const response = await Axios.getStarWarsInfo(page);
        setResponseData(response.data);
    })


    useEffect(() => {
        fetching()
    }, [page])

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 900 ? setIsMobileSize(true) : setIsMobileSize(false)
        };
        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());

        return () => {
            window.removeEventListener("resize", () => setResponsiveness());
        }
    }, []);

    return (
        <ThemeProvider theme={theme}>
            {isActiveBurger
                ? <MobileNavbarList
                    handleClick={handleClick}
                    onClickLightButton={onClickLightButton}
                    onClickDarkButton={onClickDarkButton}
                    isActiveDarkMode={isActiveDarkMode}
                />
                : <Page
                    isActiveBurger={isActiveBurger}
                    setIsActiveBurger={setIsActiveBurger}
                    onClickLightButton={onClickLightButton}
                    onClickDarkButton={onClickDarkButton}
                    responseData={responseData}
                    isLoading={isLoading}
                    error={error}
                    isMobileSize={isMobileSize}
                    isActiveDarkMode={isActiveDarkMode}
                    handleClick={handleClick}
                    page={page}
                    setPage={setPage}
            />
            }
        </ThemeProvider>
    );
}
