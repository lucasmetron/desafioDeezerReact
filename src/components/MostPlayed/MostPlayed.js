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
import { start, finish } from '../../store/actions/isRequestAction'
import logoLucas from '../../assets/logo.svg'


const useStyle = makeStyles(() => ({
    happy: {
        color: '#FFC037',
        fontSize: 40,
    }

}))




export default function MostPlayed(props) {

    const classesIcon = useStyle();
    const dispatch = useDispatch()
    const redux = useSelector(state => state)
    const [musics, setMusics] = useState([]);

    async function req() {
        dispatch(start())
        await api
            .get('/radio/37151/tracks')
            .then(response => {
                if (response) {
                    setMusics(response.data)
                    dispatch(addAllMusics(response.data.data))
                    localStorage.setItem('allMusics', JSON.stringify(response.data.data))
                    dispatch(finish())
                } else {
                    console.log('Não há resposta')
                }

            })
            .catch(err => console.log(err))

    }

    useEffect(() => {
        req();

    }, [])


    return (



        <Container>
            <Search />
            <Title>Mais Tocadas <InsertEmoticonTwoToneIcon className={classesIcon.happy} /></Title>
            <MusicList />
            <img src={logoLucas} alt="Logo Lucas" style={{ width: '30rem', marginTop: '1rem' }} />

        </Container>



    );
}