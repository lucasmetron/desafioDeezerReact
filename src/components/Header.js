import React from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
import HeadsetTwoToneIcon from '@material-ui/icons/HeadsetTwoTone';

const useStyle = makeStyles(() => ({
    router: {
        color: '#7758CE',
        fontSize: 50,
    }

}))



export default function Header() {

    const classesIconPC = useStyle();

    return (
        <div>

            <HeadsetTwoToneIcon className={classesIconPC.router} />

        </div>
    );
}