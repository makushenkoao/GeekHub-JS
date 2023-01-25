import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles(() => ({
    activeMode: {
        backgroundColor: "orange",
        color: 'white'
    },
    navItems: {
        display: "flex",
        gap: "20px",
        alignItems: 'center'
    },
    logo: {
        flexGrow: "1",
        cursor: "pointer",
        color: '#fff'
    },
    navbar: {
        marginBottom: '20px',
    },

    DesktopNavLink: {
        fontSize: '20px'
    },
    errorMessage: {
        pt: '30px',
        textAlign: 'center'
    },
    listItem : {
        border: '1px solid orange',
        borderRadius: '6px',
        marginBottom: '15px',
    },
    mobileList : {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
    },
    mobileToolbar : {
        display: 'flex',
        flexDirection: 'column',
        gap: '100px',
        paddingTop: '50px'
    },
    mobileThemeMode: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
    }
}));
