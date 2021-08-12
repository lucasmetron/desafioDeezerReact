import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import HeadsetTwoToneIcon from '@material-ui/icons/HeadsetTwoTone';
import {
    Container,
    Options,
    Logo,
    Teste

} from './styled'
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


            <Options>
                <Link to='/'><Teste>Mais tocadas</Teste></Link>
                <Link to='/musicas-favoritas'><Teste>Favoritos</Teste></Link>
            </Options>


            <div>
                <p>Sex, 13 Agosto</p>
            </div>

        </Container>
    );
}