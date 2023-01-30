import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles(() => ({
    storiesInfoLink: {
        fontSize: '18px',
        color: 'red',
        display: 'block',
        cursor: 'pointer'
    },

    notFoundMessage : {
        display: 'flex',
        justifyContent: 'center'
    },

    marginBottom: {
        marginBottom: '20px',
    },

    toolbar: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    card: {
        padding: '15px',
        marginBottom: '15px',
        cursor: 'pointer',
    },
    card_info: {
        color: '#939292',
    },
    card_link: {
        textDecoration: 'underline',
        display: 'block',
        fontSize: '18px'
    },
    cursor: {
        cursor: 'pointer'
    },
    circular_progress: {
        display: 'flex',
        justifyContent: 'center',
        padding: '15px 0'
    }

}));