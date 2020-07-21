import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import logo from './img/sound-waves.png';

const Titulo = styled.h1`
font-family: 'Russo One', sans-serif;
box-sizing:border-box;
font-size: 50px;
`
const Container1 = styled.div`
display:flex;

`

export default class Spotika extends React.Component{
    render(){
        return(
            <Container1>
                <Titulo>Spotika</Titulo>
                {logo}
            </Container1>
        )
    }
}