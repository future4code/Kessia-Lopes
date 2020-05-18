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


class Cursos extends React.Component {
    render(){
  return (
    <Container>
        <Titulo>
            <h1>Formulário Turmalina Negra</h1>
            <h2>Cursos</h2>
        </Titulo>
        <hr />
        <Form>
            <p>Porque não concluiu um curso superior?</p>
            <textarea/>
            <p>Fez algum curso complementar?</p>
            <select>
                <option>Curso Técnico</option>
                <option>Idiomas</option>
                <opition>Não fiz</opition>
            </select>
        </Form>
      <hr />
    </Container>
  );
    }
}

export default Cursos;
