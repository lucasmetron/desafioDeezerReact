import React from 'react';
import MusicList from '../MusicList/MusicList';
import Search from '../Search/Search';
import {
    Container,
    Title,
} from './styled'
import { makeStyles } from '@material-ui/core/styles';
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';

const useStyle = makeStyles(() => ({
    favorite: {
        color: '#FE1B2D',
        fontSize: 40,
    }

}))

export default function Favorites(props) {

    const classesIcon = useStyle();

    return (
        <>

            <Container>
                <Search />

                <Title>Seus Favoritos <FavoriteTwoToneIcon className={classesIcon.favorite} /> </Title>

                <MusicList></MusicList>

            </Container>


        </>


    );
}