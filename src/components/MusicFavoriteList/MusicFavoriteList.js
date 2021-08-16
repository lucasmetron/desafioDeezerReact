import React from 'react'
import PlayArrowTwoToneIcon from '@material-ui/icons/PlayArrowTwoTone';
import PauseCircleFilledTwoToneIcon from '@material-ui/icons/PauseCircleFilledTwoTone';
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';
import { makeStyles } from '@material-ui/core/styles';
import {
    ThumbNail,
    Container,
    TitleList,
    List,
    Item,
    Erro,
    Listcontainer,
} from './styled'

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Load from '../Loading/Load';
import { addFavoriteList, removeFavoriteList } from '../../store/actions/favoriteListActions'


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
    delete: {
        color: '#FE1B2D',
        fontSize: 40,
    }

}))



export default function MusicFavoriteList(props) {

    const classesIcon = useStyle();
    const redux = useSelector(state => state)
    const [favoritList, setFavoriteList] = useState([]);
    const dispatch = useDispatch();

    function removeMusicOnFavorite(id) {

        dispatch(removeFavoriteList(id))
        console.log(id)
        console.log(redux)
    }

    function convertSecToMin(time) {
        let seconds = (time / 60).toFixed(2);
        let result = seconds.split(".")
        return `${result[0]}:${result[1]}`
    }

    useEffect(() => {
        let list = JSON.parse(localStorage.getItem('favoriteList'))
        if (redux.favoritList.length < 0 && list.length > 0) {
            list.map((item) => {
                dispatch(addFavoriteList(item))
            })
            console.log(redux)
            console.log('cai no if')

        } else {

            console.log('local storage vazia')
        }

        setFavoriteList(redux.favoritList)
    }, [])

    useEffect(() => {
        setFavoriteList(redux.favoritList)
    }, [redux])


    console.log(redux)

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

                <Listcontainer>

                    {favoritList.length > 0 ?

                        favoritList.map((item, i) => {


                            return (
                                <>
                                    <List>

                                        <Item><ThumbNail src={item.album.cover_medium} /></Item>
                                        <Item id={item.id}>{item.title}</Item>
                                        <Item>{item.artist.name}</Item>
                                        <Item>{convertSecToMin(item.duration)}</Item>

                                        <Item>
                                            <PlayArrowTwoToneIcon className={classesIcon.play} />
                                            <PauseCircleFilledTwoToneIcon className={classesIcon.pause} />
                                            <DeleteForeverTwoToneIcon className={classesIcon.delete} onClick={(() => { removeMusicOnFavorite(item.id) })} />
                                        </Item>
                                    </List>
                                </>
                            )


                        })

                        :

                        <Erro > Lista de musicas favoritas vazia.</Erro>

                    }

                </Listcontainer>
            }




        </Container >

    );
}