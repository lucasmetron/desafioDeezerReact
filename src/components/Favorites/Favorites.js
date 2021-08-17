import React from 'react';
import MusicFavoriteList from '../MusicFavoriteList/MusicFavoriteList';
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

                <Title>Seus Favoritos <FavoriteTwoToneIcon className={classesIcon.favorite} /> </Title>

                <MusicFavoriteList></MusicFavoriteList>

            </Container>


        </>


    );
}