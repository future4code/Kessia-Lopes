import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      
      tarefas: [{
        id: Date.now(), // Explicação abaixo
        texto: 'Futsal',
        completa: false // Indica se a tarefa está completa (true ou false)
      },
      {
        id: Date.now(), // Explicação abaixo
        texto: 'Médico',
        completa: true // Indica se a tarefa está completa (true ou false)
      }],
      inputValue: '',
      filter: ''
      
    
    }

  componentDidUpdate=()=> {
    const atualizaTarefa = this.state.tarefas;

    localStorage.setItem("tarefas", JSON.stringify(atualizaTarefa));
  };

  componentDidMount=()=> {
    const tarefasLocalStorage = localStorage.getItem("tarefas");

    const tarefaObj = JSON.parse(tarefasLocalStorage);

   // console.log(tarefaObj.completa);

  };

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  criaTarefa = () => {
    const novaTarefa ={
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false 
    }
    const adicionaTarefa = [...this.state.tarefas, novaTarefa]

    this.setState({tarefas: adicionaTarefa, inputValue:""})

  };

  selectTarefa = (id) => {
    const listaTarefasCompletas = this.state.tarefas.map((tarefa,idx,arr) =>{
      if(tarefa.id === id){
        const tarefasCompletas ={
          ...tarefa, completa: !tarefa.completa
        }
        console.log(tarefasCompletas)
        return tarefasCompletas
      }
      else{
        return tarefa
      }
    })
    this.setState({tarefas: listaTarefasCompletas})
  }

  onChangeFilter = (event) => {
    this.setState({filter: event.target.value });
  }

  render() {
    const listaFiltrada = this.state.tarefas
      .filter(tarefa => {
        switch (this.state.filter) {
          case 'pendentes':
            return !tarefa.completa
          case 'completas':
            return tarefa.completa
          default:
            return true
        }
      })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
