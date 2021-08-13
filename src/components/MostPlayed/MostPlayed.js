import React from 'react';
import Search from '../Search/Search';
import {
    Container,
    Title,
} from './styled'
import MusicList from '../MusicList/MusicList';
import InsertEmoticonTwoToneIcon from '@material-ui/icons/InsertEmoticonTwoTone';
import { makeStyles } from '@material-ui/core/styles';
import api from '../../service/api';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAllMusics } from '../../store/actions/musicsAction'

const useStyle = makeStyles(() => ({
    happy: {
        color: '#FFC037',
        fontSize: 40,
    }

}))


export default function MostPlayed(props) {

    const classesIcon = useStyle();
    const dispatch = useDispatch()
    const allMusics = useSelector(state => state)

    const [musics, setMusics] = useState([]);

    async function req() {
        await api
            .get('/radio/37151/tracks')
            .then(response => {
                setMusics(response.data)
                dispatch(addAllMusics(musics.data))
            })
            .catch(err => console.log(err))

    }

    async function reqByFetch() {
        await fetch('http://cors-anywhere.herokuapp.com/https://api.deezer.com').then(res => {
            return res.json()
        }).then(data => console.log(data))
    }

    useEffect(() => {
        req();

        console.log(allMusics)
        console.log(musics)

    }, [])



    return (



        <Container>
            <Search />
            <Title>Mais Tocadas <InsertEmoticonTwoToneIcon className={classesIcon.happy} /></Title>
            <MusicList />

        </Container>



    );
}