import React from 'react';
import Search from '../Search/Search';
import {
    Container,
    MyTable,
    OverFlow,
    FakeBackGround,
    ThumbNail

} from './styled'
import './style.css'
import thumbtest from '../../assets/thumb.jpg'
import { makeStyles } from '@material-ui/core/styles';
import PlayArrowTwoToneIcon from '@material-ui/icons/PlayArrowTwoTone';
import PauseCircleFilledTwoToneIcon from '@material-ui/icons/PauseCircleFilledTwoTone';
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';

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

const useStyle = makeStyles(() => ({
    play: {
        color: '#04D160',
        fontSize: 100,
    },
    // pause: {
    //     color: '#04D160',
    //     fontSize: 60,
    // },
    // favorite: {
    //     color: '#FE1B2D',
    //     fontSize: 60,
    // }

}))

export default function MostPlayed() {
    const classesIcon = useStyle();


    return (

        <div className='overFlow' >


            <Container>
                <Search />

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
                                    <td><PlayArrowTwoToneIcon className={classesIcon.play} /> <PauseCircleFilledTwoToneIcon className={classesIcon.pause} /> <FavoriteTwoToneIcon className={classesIcon.favorite} /> </td>
                                </tr>
                            )

                        })
                        :

                        <h1>Não há músicas</h1>
                    }




                </MyTable>


            </Container>



        </div >


    );
}