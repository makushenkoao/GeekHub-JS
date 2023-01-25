import React from 'react';
import {Button, Container, Typography} from '@mui/material';

export const ChangePage = ({page,setPage,responseData}) => {
    return (
        <Container fixed maxWidth='1200px' sx={{textAlign: 'center'}}>
            <Button
                onClick={() => setPage((old) => Math.max(old - 1, 1))}
                disabled={!responseData.previous}
                variant='contained'
            >Previous</Button>
            <Typography
                variant='span'
                sx={{margin: '0 15px'}}
            >{page}</Typography>
            <Button
                onClick={() => setPage((old) => (responseData.next ? old + 1 : old))}
                disabled={!responseData.next}
                variant='contained'
            >Next</Button>
        </Container>
    );
};
