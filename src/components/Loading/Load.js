import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import styled from 'styled-components';
import { SpinnerLoad } from './styled'

const LoadingStyele = makeStyles(() => ({
    circle: {
        color: '#07D365',
    },


}))

export default function Load() {
    const classes = LoadingStyele()
    return (
        <SpinnerLoad>
            <CircularProgress className={classes.circle} size={100} />
        </SpinnerLoad>
    )
}