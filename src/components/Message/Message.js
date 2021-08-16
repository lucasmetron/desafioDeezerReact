import React from 'react'
import {
    Alert,
    AlertMessage
} from './styled'
export default function Message(props) {
    console.log(props)
    return (
        <Alert>
            <AlertMessage style={{ display: props.alert }}>Feito com sucesso! :D</AlertMessage>
        </Alert>

    );
}