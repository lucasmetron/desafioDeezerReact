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

function getDate() {
    let date = new Date();
    let day = String(date.getDate()).padStart(2, '0');
    let mounth = String(date.getMonth() + 1).padStart(2, '0');
    let year = date.getFullYear();
    const dayOFWeek = (date) => {
        if (date.getDay() === 0) {
            return 'Dom'
        } else if (date.getDay() === 1) {
            return 'Seg'
        } else if (date.getDay() === 2) {
            return 'Ter'
        } else if (date.getDay() === 3) {
            return 'Qua'
        } else if (date.getDay() === 4) {
            return 'Qui'
        } else if (date.getDay() === 5) {
            return 'Sex'
        } else if (date.getDay() === 6) {
            return 'Sab'
        } else {
            return 'N/A'
        }
    }

    return `${dayOFWeek(date)},  ${day}/${mounth}/${year}`
}



export default function Header(props) {

    const classesIcon = useStyle();



    return (
        <Container>
            <Logo>
                <HeadsetTwoToneIcon className={classesIcon.router} />
                <p>Deezer do Lucas</p>
            </Logo>


            <Options>
                <Link to='/'><Teste>Mais tocadas</Teste></Link>
                <Link to='/musicas-favoritas'><Teste>Favoritos</Teste></Link>
            </Options>


            <div>
                <p>{getDate()}</p>
            </div>

        </Container>
    );
}