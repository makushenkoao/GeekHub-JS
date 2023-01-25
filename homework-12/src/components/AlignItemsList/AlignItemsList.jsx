import * as React from 'react';
import {ListItemText, ListItemAvatar} from '@mui/material';
import {Container, Typography, Avatar, List, ListItem} from '@mui/material';
import {useStyles} from "../../hooks/useStyles";

export const AlignItemsList = ({
    responseData
}) => {
    const styles = useStyles()
    const {results} = responseData;
    return (
        <Container fixed maxWidth='1200px'>
            <List>
                {results && results.map(person => (
                    <ListItem key={person.name}
                        alignItems='flex-start'
                        className={styles.listItem}
                    >
                        <ListItemAvatar>
                            <Avatar
                                alt={person.name}
                                src='/static/images/avatar'
                            />
                        </ListItemAvatar>
                        <ListItemText
                            primary={
                            <Typography
                                variant='h5'
                                sx={{m: '8px 0px'}}
                            >{person.name}</Typography>
                            }
                            secondary={
                                <>
                                    <Typography
                                        component='span'
                                        sx={{display: 'block', mb: '5px'}}
                                    >Gender: {person.gender}</Typography>
                                    <Typography
                                        component='span'
                                        sx={{display: 'block', mb: '5px'}}
                                    >Birth year: {person.birth_year}</Typography>
                                    <Typography
                                        component='span'
                                        sx={{display: 'block', mb: '5px'}}
                                    >Eye color: {person.eye_color}</Typography>
                                    <Typography
                                        component='span'
                                        sx={{display: 'block', mb: '5px'}}
                                    >Hair color: {person.hair_color}</Typography>
                                    <Typography
                                        component='span'
                                        sx={{display: 'block', mb: '5px'}}
                                    >Skin Color: {person.skin_color}</Typography>
                                </>
                            }
                        />
                    </ListItem>
                ))}
            </List>
        </Container>
    );
}