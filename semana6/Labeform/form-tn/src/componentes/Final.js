import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
margin:0px;
padding: 0px;
background-color: whitesmoke;
`
const Titulo = styled.div`
background-color: black;
color:white;
`
export class Final extends React.Component {
    render(){ 
  return (
    <Container>
        <Titulo>
            <h1>Formulário Turmalina Negra</h1>
        </Titulo>
        <h2>Obrigado por responder ao nosso formulário!</h2>
    <hr />
    </Container>
  );
    }
    
}

export default Final;
