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

export class DadosPessoais extends React.Component {
  render(){  
  return (
    <Container>
        <Titulo>
            <h1>Formulário Turmalina Negra</h1>
            <h2>Dados Pessoais</h2>
       </Titulo>
       <hr />
       <Form>
            <p><label>Nome:</label>
            <input placeholder= "Digite seu nome"/></p>
            <p><label>Idade:</label>
            <input placeholder = "Digite sua Idade"/></p>
            <label>E-mail:</label>
            <input placeholder = "Digite seu e-mail" />
            <p>Grau de escolaridade:</p>
            <select placeholder = "Selecione uma opção">
                <option value="Ens-M-Completo">Ensino Médio Completo</option>
                <option value="Ens-M-Incompleto">Ensino Médio Incompleto</option>
                <option value="Ens-S-Completo">Ensino Superior Completo</option>
                <option value="Ens=S-Incompleto">Ensino Superior Incompleto</option>
            </select>
       </Form>
       <hr />
    </Container>
    
  );
  }
}

export default DadosPessoais;
