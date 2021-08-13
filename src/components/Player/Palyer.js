import React, { useEffect } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { useState } from 'react';
import {
    Container,
} from './styled'


export default function Player(props) {

    const [progress, setProgress] = useState(0);


    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    return 0;
                }
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 100);
            });
        }, 500);

        return () => {
            clearInterval(timer);
        };
    }, []);



    return (
        <div>
            <Container >

                <LinearProgress variant="determinate" value={progress} />
            </Container>

        </div>
    );
}