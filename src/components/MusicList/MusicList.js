import React from 'react'
import PlayArrowTwoToneIcon from '@material-ui/icons/PlayArrowTwoTone';
import PauseCircleFilledTwoToneIcon from '@material-ui/icons/PauseCircleFilledTwoTone';
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
import { makeStyles } from '@material-ui/core/styles';
import {
    ThumbNail,
    Container,
    TitleList,
    List,
    Item,

} from './styled'

import thumbtest from '../../assets/thumb.jpg'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Load from '../Loading/Load';


const useStyle = makeStyles(() => ({
    play: {
        color: '#07D365',
        fontSize: 40,
        marginRight: 10
    },
    pause: {
        color: '#07D365',
        fontSize: 40,
        marginRight: 10
    },
    favorite: {
        color: '#FE1B2D',
        fontSize: 40,
    }

}))


const objTeste = [
    {
        capa: 'Foto',
        title: 'Me ajude a melhorar',
        singer: 'Eli Soares',
        duration: '3:50'
    },
    {
        capa: 'Foto',
        title: 'A mesa',
        singer: 'Eli Soares',
        duration: '4:15'
    },
    {
        capa: 'Foto',
        title: 'Deus está aqui',
        singer: 'Eli Soares',
        duration: '4:01'
    },
    {
        capa: 'Foto',
        title: 'Os anjos te Louvam',
        singer: 'Eli Soares',
        duration: '2:47'
    },
    {
        capa: 'Foto',
        title: 'Os anjos te Louvam',
        singer: 'Eli Soares',
        duration: '2:47'
    },
    {
        capa: 'Foto',
        title: 'Os anjos te Louvam',
        singer: 'Eli Soares',
        duration: '2:47'
    },
    {
        capa: 'Foto',
        title: 'Os anjos te Louvam',
        singer: 'Eli Soares',
        duration: '2:47'
    },
    {
        capa: 'Foto',
        title: 'Os anjos te Louvam',
        singer: 'Eli Soares',
        duration: '2:47'
    },
    {
        capa: 'Foto',
        title: 'Os anjos te Louvam',
        singer: 'Eli Soares',
        duration: '2:47'
    },
    {
        capa: 'Foto',
        title: 'Os anjos te Louvam',
        singer: 'Eli Soares',
        duration: '2:47'
    }, {
        capa: 'Foto',
        title: 'Os anjos te Louvam',
        singer: 'Eli Soares',
        duration: '2:47'
    },
    {
        capa: 'Foto',
        title: 'Os anjos te Louvam',
        singer: 'Eli Soares',
        duration: '2:47'
    },
    {
        capa: 'Foto',
        title: 'Os anjos te Louvam',
        singer: 'Eli Soares',
        duration: '2:47'
    },
    {
        capa: 'Foto',
        title: 'Os anjos te Louvam',
        singer: 'Eli Soares',
        duration: '2:47'
    },
    {
        capa: 'Foto',
        title: 'Os anjos te Louvam',
        singer: 'Eli Soares',
        duration: '2:47'
    },
    {
        capa: 'Foto',
        title: 'Os anjos te Louvam',
        singer: 'Eli Soares',
        duration: '2:47'
    },
    {
        capa: 'Foto',
        title: 'Os anjos te Louvam',
        singer: 'Eli Soares',
        duration: '2:47'
    },
    {
        capa: 'Foto',
        title: 'Me ajude a melhorar',
        singer: 'Eli Soares',
        duration: '3:50'
    },
    {
        capa: 'Foto',
        title: 'A mesa',
        singer: 'Eli Soares',
        duration: '4:15'
    },
    {
        capa: 'Foto',
        title: 'Deus está aqui',
        singer: 'Eli Soares',
        duration: '4:01'
    },
    {
        capa: 'Foto',
        title: 'Os anjos te Louvam',
        singer: 'Eli Soares',
        duration: '2:47'
    },
    {
        capa: 'Foto',
        title: 'Os anjos te Louvam',
        singer: 'Eli Soares',
        duration: '2:47'
    },
    {
        capa: 'Foto',
        title: 'Os anjos te Louvam',
        singer: 'Eli Soares',
        duration: '2:47'
    },
    {
        capa: 'Foto',
        title: 'Os anjos te Louvam',
        singer: 'Eli Soares',
        duration: '2:47'
    },
    {
        capa: 'Foto',
        title: 'Os anjos te Louvam',
        singer: 'Eli Soares',
        duration: '2:47'
    },
    {
        capa: 'Foto',
        title: 'Os anjos te Louvam',
        singer: 'Eli Soares',
        duration: '2:47'
    },
    {
        capa: 'Foto',
        title: 'Os anjos te Louvam',
        singer: 'Eli Soares',
        duration: '2:47'
    }, {
        capa: 'Foto',
        title: 'Os anjos te Louvam',
        singer: 'Eli Soares',
        duration: '2:47'
    },
    {
        capa: 'Foto',
        title: 'Os anjos te Louvam',
        singer: 'Eli Soares',
        duration: '2:47'
    },
    {
        capa: 'Foto',
        title: 'Os anjos te Louvam',
        singer: 'Eli Soares',
        duration: '2:47'
    },
    {
        capa: 'Foto',
        title: 'Os anjos te Louvam',
        singer: 'Eli Soares',
        duration: '2:47'
    },
    {
        capa: 'Foto',
        title: 'Os anjos te Louvam',
        singer: 'Eli Soares',
        duration: '2:47'
    },
    {
        capa: 'Foto',
        title: 'Os anjos te Louvam',
        singer: 'Eli Soares',
        duration: '2:47'
    },
    {
        capa: 'Foto',
        title: 'Os anjos te Louvam',
        singer: 'Eli Soares',
        duration: '2:47'
    }
]


export default function MusicList(props) {

    const classesIcon = useStyle();
    const redux = useSelector(state => state)
    const allMusic = useSelector(state => state.allMusics) || { erro: "Não chegou nada" }


    useEffect(() => {
        console.log(redux)
    }, [allMusic])

    return (

        <Container>

            <TitleList>
                <h2>Capa</h2>
                <h2>Titulos</h2>
                <h2>Cantor(a)</h2>
                <h2>Duração</h2>
                <h2>Opções</h2>
            </TitleList>

            {redux.isrequest === true ?

                <Load />

                :

                <List>

                    {allMusic.length > 0 ?

                        allMusic.map((item, i) => {

                            return (
                                <>


                                    <Item><ThumbNail src={item.album.cover_medium} /></Item>
                                    <Item id={item.id}>{item.title}</Item>
                                    <Item>{item.artist.name}</Item>
                                    <Item>{item.duration}</Item>

                                    <Item>
                                        <PlayArrowTwoToneIcon className={classesIcon.play} />
                                        <PauseCircleFilledTwoToneIcon className={classesIcon.pause} />
                                        <FavoriteTwoToneIcon className={classesIcon.favorite} />
                                    </Item>
                                </>
                            )


                        })

                        :

                        < div > Requisição não chegou</div>
                    }

                </List>
            }




        </Container >

    );
}