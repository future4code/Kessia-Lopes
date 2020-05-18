import React from 'react';
import styled from 'styled-components';

export class Escolaridade extends React.Component {
    render(){
  return (
    <div className="Escolaridade">
        <form>
            <label>Informe seu curso:</label>
            <input/>
            <label>Unidade de ensino:</label>
            <input/>
        </form>
      
    </div>
  );
    }
}

export default Escolaridade;
