import React from 'react';
import styled from 'styled-components';


export class DadosPessoais extends React.Component {
  render(){  
  return (
    <div className="DadosPessoais">
       <h1>Dados Pessoais</h1>
       <form>
            <label>Nome:</label>
            <input/>
            <label>Idade:</label>
            <input/>
            <label>E-mail:</label>
            <input/>
            <select>
                <option>Ensino Médio Completo</option>
                <option>Ensino Médio Incompleto</option>
                <option>Ensino Superior Completo</option>
                <option>Ensino Superior Incompleto</option>
            </select>
       </form>
    </div>
  );
  }
}

export default DadosPessoais;
