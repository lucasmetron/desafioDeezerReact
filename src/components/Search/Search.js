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
            width: '20rem',
            color: '##FCD500',
            backGroundColor: '#004154'
        },
    },
}));

export default function Search(props) {
    const classes = useStyles();
    const [wordKey, setWordKey] = useState('');

    function handleChange(event) {
        event.preventDefault();
        setWordKey(event.target.value)
    }



    console.log(wordKey)
    return (
        <Container>
            <form className={classes.inputSearch} noValidate autoComplete="on">
                <TextField id="standard-basic" label="Buscar" onChange={handleChange} />
            </form>
        </Container>

    );
}