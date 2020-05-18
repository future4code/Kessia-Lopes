import React from 'react';
import styled from 'styled-components';


class Cursos extends React.Component {
    render(){
  return (
    <div className="Cursos">
        <label>Porque não concluiu um curso superior?</label>
        <textarea/>
        <label>Fez algum curso complementar?</label>
        <select>
            <option>Curso Técnico</option>
            <option>Idiomas</option>
            <opition>Não fiz</opition>
        </select>
      
    </div>
  );
    }
}

export default Cursos;
