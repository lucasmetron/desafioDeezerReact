import React from 'react'
import PlayArrowTwoToneIcon from '@material-ui/icons/PlayArrowTwoTone';
import PauseCircleFilledTwoToneIcon from '@material-ui/icons/PauseCircleFilledTwoTone';
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
import { makeStyles } from '@material-ui/core/styles';
import {
    MyTable,
    ThumbNail

} from './styled'

import thumbtest from '../../assets/thumb.jpg'


const useStyle = makeStyles(() => ({
    play: {
        color: '#04D160',
        fontSize: 100,
    },
    pause: {
        color: '#04D160',
        fontSize: 60,
    },
    favorite: {
        color: '#FE1B2D',
        fontSize: 60,
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
    }
]


export default function MusicList(props) {
    const classesIconPlayer = useStyle();

    return (
        <MyTable>

            <tr>
                <th>Capa</th>
                <th>Título</th>
                <th>Cantor(a)</th>
                <th>Duração</th>
                <th></th>
            </tr>


            {objTeste !== undefined ?

                objTeste.map((item, i) => {

                    return (

                        <tr key={i}>
                            <td> <ThumbNail src={thumbtest} alt="" /></td>
                            <td>{item.title}</td>
                            <td>{item.singer}</td>
                            <td>{item.duration}</td>
                            <td><PlayArrowTwoToneIcon className={classesIconPlayer.play} /> <PauseCircleFilledTwoToneIcon className={classesIconPlayer.pause} /> <FavoriteTwoToneIcon className={classesIconPlayer.favorite} /> </td>
                        </tr>
                    )

                })
                :

                <h1>Não há músicas</h1>
            }




        </MyTable>

    );
}