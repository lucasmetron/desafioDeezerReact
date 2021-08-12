import React from 'react';
import {
    Container,
} from './styled'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    inputSearch: {
        '& > *': {
            margin: theme.spacing(1),
            width: '20rem',
            color: '##FCD500',
            backGroundColor: '#004154'
        },
    },
}));

export default function Search() {
    const classes = useStyles();
    const [wordKey, setWordKey] = useState('');

    console.log(wordKey)

    return (
        <Container>
            <form className={classes.inputSearch} noValidate autoComplete="on">
                <TextField id="standard-basic" label="Buscar" onChange={(event) => { setWordKey(event.target.value) }} />
            </form>
        </Container>

    );
}