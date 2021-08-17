import React from 'react'
import PlayArrowTwoToneIcon from '@material-ui/icons/PlayArrowTwoTone';
import PauseCircleFilledTwoToneIcon from '@material-ui/icons/PauseCircleFilledTwoTone';
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
import LinkIcon from '@material-ui/icons/Link';
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
import { selectedMusic } from '../../store/actions/selectedMusic'

import Message from '../Message/Message';



const useStyle = makeStyles(() => ({
    play: {
        color: '#07D365',
        fontSize: 25,
        marginRight: 10
    },
    pause: {
        color: '#07D365',
        fontSize: 25,
        marginRight: 10
    },
    favorite: {
        color: '#FE1B2D',
        fontSize: 25,
        marginRight: 10
    },
    link: {
        color: '#07D365',
        fontSize: 25,
    }

}))


export default function MusicList(props) {

    const classesIcon = useStyle();
    const redux = useSelector(state => state);
    const allMusic = useSelector(state => state.allMusics) || { erro: "Não chegou nada" };
    const dispatch = useDispatch();
    const [musicPlay, setMusicPlay] = useState('');
    const [urlMusic, setUrlMusic] = useState('');
    const [alert, setAlert] = useState('none');




    useEffect(() => {

        if (redux.favoritList !== []) {
            // localStorage.setItem('favoriteList', JSON.stringify(redux.favoritList))
            // console.log(redux)
        }



        console.log(redux)

    }, [redux])


    function addFavoriteListOnRedux(music) {
        dispatch(addFavoriteList(music))
        setAlert('flex')
        setTimeout(() => { setAlert('none') }, 1000)
    }

    async function saveLocal() {
        if (redux.favoritList !== '') {
            console.log(redux.favoritList.length === [''])
            await localStorage.setItem('favoriteList', JSON.stringify(redux.favoritList))
        }

    }

    saveLocal()

    function play(item) {
        setUrlMusic(item.preview)
        console.log(item.preview)

    }

    function pause(item) {
        setUrlMusic('')
        console.log('pause clicado')

    }

    function saveSelectedMusic(item) {
        dispatch(selectedMusic(item))
        // console.log(redux)
    }

    function convertSecToMin(time) {
        let seconds = (time / 60).toFixed(2);
        let result = seconds.split(".")
        return `${result[0]}:${result[1]}`
    }

    console.log(props.coisa)

    return (

        <Container>

            <div style={{ marginBottom: 10 }} > {urlMusic !== '' ? <audio src={urlMusic} autoPlay loop controls ></audio> : ''} </div>

            <Message alert={alert} />

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

                    {allMusic.length > 0 ?

                        allMusic.map((item) => {

                            return (
                                <List id={item.id} onClick={(() => { saveSelectedMusic(item) })}>
                                    <Item><ThumbNail src={item.album.cover_medium} /></Item>
                                    <Item id={item.id}>{item.title}</Item>
                                    <Item>{item.artist.name}</Item>
                                    <Item>{convertSecToMin(item.duration)}</Item>

                                    <Item>

                                        <PlayArrowTwoToneIcon className={classesIcon.play} onClick={(() => { play(item) })} />
                                        <PauseCircleFilledTwoToneIcon className={classesIcon.pause} onClick={(() => { pause(item) })} />
                                        <FavoriteTwoToneIcon className={classesIcon.favorite} onClick={(() => { addFavoriteListOnRedux(item) })} />
                                        <a href={item.link} target="_black" ><LinkIcon className={classesIcon.link} /></a>
                                    </Item>
                                </List>
                            )


                        })

                        :
                        <div>
                            <Erro > Lista vazia :/</Erro>
                            <Erro>Acesse o link a seguir para ativar serviço da API de CORS: http://cors-anywhere.herokuapp.com/corsdemo</Erro>
                        </div>



                    }

                </Listcontainer>
            }

        </Container >

    );
}