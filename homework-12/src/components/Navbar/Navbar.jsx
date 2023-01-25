import React from 'react';
import {DesktopNavbar} from "../DesktopNavbar";
import {MobileNavbar} from "../MobileNavbar";

export const Navbar = ({
   isActiveDarkMode,
   isMobileSize,
   onClickDarkButton,
   onClickLightButton,
   isActiveBurger,
   handleClick
}) => {
    return (
        <>
            {!isMobileSize
                ? <DesktopNavbar
                    isActiveDarkMode={isActiveDarkMode}
                    onClickDarkButton={onClickDarkButton}
                    onClickLightButton={onClickLightButton}
                />
                : <MobileNavbar
                    isActiveDarkMode={isActiveDarkMode}
                    onClickDarkButton={onClickDarkButton}
                    onClickLightButton={onClickLightButton}
                    handleClick={handleClick}
                    isActiveBurger={isActiveBurger}
                />
            }
        </>
    );
};
