import React from 'react';
import Search from '../Search/Search';
import {
    Container,
    Title,
} from './styled'
import './style.css'
import MusicList from '../MusicList/MusicList';
import InsertEmoticonTwoToneIcon from '@material-ui/icons/InsertEmoticonTwoTone';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(() => ({
    happy: {
        color: '#FFC037',
        fontSize: 40,
    }

}))


export default function MostPlayed(props) {

    const classesIcon = useStyle();

    return (

        <div className='overFlow' >


            <Container>
                <Search />
                <Title>Mais Tocadas <InsertEmoticonTwoToneIcon className={classesIcon.happy} /></Title>
                <MusicList />

            </Container>



        </div >


    );
}