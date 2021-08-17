import React from 'react'
import PlayArrowTwoToneIcon from '@material-ui/icons/PlayArrowTwoTone';
import PauseCircleFilledTwoToneIcon from '@material-ui/icons/PauseCircleFilledTwoTone';
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';
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
import Message from '../Message/Message';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Load from '../Loading/Load';
import { addFavoriteList, removeFavoriteList } from '../../store/actions/favoriteListActions'


const useStyle = makeStyles(() => ({
    play: {
        color: '#07D365',
        fontSize: 20,
        marginRight: 10
    },
    pause: {
        color: '#07D365',
        fontSize: 20,
        marginRight: 10
    },
    delete: {
        color: '#FE1B2D',
        fontSize: 20,
        marginRight: 10,
    },
    link: {
        color: '#07D365',
        fontSize: 20,
    }

}))



export default function MusicFavoriteList(props) {

    const classesIcon = useStyle();
    const redux = useSelector(state => state)
    const [favoritList, setFavoriteList] = useState([]);
    const dispatch = useDispatch();
    const [urlMusic, setUrlMusic] = useState('')
    const [alert, setAlert] = useState('none');

    function removeMusicOnFavorite(id) {

        dispatch(removeFavoriteList(id))
        let local = JSON.parse(localStorage.getItem('favoriteList'))
        let localFilter = local.filter(item => item.id != id)
        localStorage.setItem('favoriteList', JSON.stringify(localFilter))
        setUrlMusic('')
        setAlert('flex')
        setTimeout(() => { setAlert('none') }, 1000)
    }

    function play(item) {
        setUrlMusic(item.preview)

    }

    function pause(item) {
        setUrlMusic('')
    }

    function convertSecToMin(time) {
        let seconds = (time / 60).toFixed(2);
        let result = seconds.split(".")
        return `${result[0]}:${result[1]}`
    }

    useEffect(() => {
        if (redux.favoritList == '') {
            let local = JSON.parse(localStorage.getItem('favoriteList'))
            local.map(item => {
                dispatch(addFavoriteList(item))
            })
        }
    }, [])

    useEffect(() => {
        setFavoriteList(redux.favoritList)
    }, [redux])



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
                                            <PlayArrowTwoToneIcon className={classesIcon.play} onClick={(() => { play(item) })} />
                                            <PauseCircleFilledTwoToneIcon className={classesIcon.pause} onClick={(() => { pause(item) })} />
                                            <DeleteForeverTwoToneIcon className={classesIcon.delete} onClick={(() => { removeMusicOnFavorite(item.id) })} />
                                            <a href={item.link} target="_black" ><LinkIcon className={classesIcon.link} /></a>
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