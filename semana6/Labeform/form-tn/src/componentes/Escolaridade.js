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
const Form = styled.form`
font-weight: bold;
background-color:whitesmoke;
`

export class Escolaridade extends React.Component {
    render(){
  return (
    <Container>
        <Titulo>
            <h1>Formulário Turmalina Negra</h1>
            <h2>Escolaridade</h2>
        </Titulo>
        <hr />
        <Form>
            <p><label>Informe seu curso:</label>
            <input placeholder = "Digite seu curso"/></p>
            <p><label>Unidade de ensino:</label>
            <input placeholder = "Digite a unidade de ensino"/></p>
        </Form>
      <hr />
    </Container>
  );
    }
}

export default Escolaridade;
