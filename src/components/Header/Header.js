import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import HeadsetTwoToneIcon from '@material-ui/icons/HeadsetTwoTone';
import {
    Container,
    Logo
} from './HeaderStyled'
import { Link } from 'react-router-dom';

const useStyle = makeStyles(() => ({
    router: {
        color: '#7758CE',
        fontSize: 60,
    }

}))



export default function Header() {

    const classesIconPC = useStyle();

    return (
        <Container>
            <Logo>
                <HeadsetTwoToneIcon className={classesIconPC.router} />
                <p>Deazer do Lucas</p>
            </Logo>

            <div>
                <ul>
                    <li><Link to='/'>Mais tocadas</Link></li>
                    <li><Link to='/musicas-favoritas'>Favoritos</Link></li>
                </ul>
            </div>

            <div>
                <p>Sex, 13 Agosto</p>
            </div>


        </Container>
    );
}