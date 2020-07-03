import React, {useState, useEffect} from 'react';
import './App.css';

import axios from 'axios';
import styled from 'styled-components';
import {ContainerTasks} from './styled/styles.js';
function App() {
  const [task, setTask]= useState('')
  const [day, setDay] = useState('')
  const [listTasks, setListTasks]=useState([])
  const [reload, setReload] = useState(0)


  const handleInputValue = (e) =>{
    setTask(e.target.value);
  };

  const handleSelectValue =(e) =>{
    setDay(e.target.value);
  };

  const createTask = async (e) =>{
    e.preventDefault();


    const body ={
      text: task,
      day: day
    };
    try{
      const response = await axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-mello-kessia`, body);
      console.log(response);
      setTask('');
      setReload(reload + 1)
    } catch(err){
      console.log(err)
    }
    
  };
  const getListTasks = async () =>{
    try{
      const response = await axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-mello-kessia`);
      setListTasks(response.data)
      console.log(response.data);
    } catch(err){
      console.log(err)
    }
  };
  useEffect(()=>{
    getListTasks();
    console.log(listTasks)
  },[reload]);


  return (
    <div className="App">
      <div>
        Planner
      </div>
      <form onSubmit={createTask}>
        <label>
          Nova tarefa: 
        </label>
        <input required placeholder='Nova Tarefa' onChange ={handleInputValue}/>
        <label>
          Dia: <select required onChange = {handleSelectValue}>
            <option value =""></option>
            <option value ="Domingo">Domingo</option>
            <option value ="Segunda">Segunda-Feira</option>
            <option value ="Terça">Terça-Feira</option>
            <option value ="Quarta">Quarta-Feira</option>
            <option value ="Quinta">Quinta-Feira</option>
            <option value ="Sexta">Sexta-Feira</option>
            <option value ="Sabado">Sábado</option>
          </select>
         </label>
         <button type ="submit">Criar Tarefa</button>
      </form>
      <ContainerTasks>
          <div>Domingo
            <hr  />
            {listTasks.map((tasks)=>{
              if(tasks.day==='Domingo'){
                return <p key={tasks.id}>{tasks.text}</p>
              }
            })}
          </div>
          <div>Segunda-Feira
          <hr  />
            {listTasks.map((tasks)=>{
              if(tasks.day==='Segunda'){
                return <p key={tasks.id}>{tasks.text}</p>
              }
            })}
          </div>
          <div>Terça-Feira
            <hr  />
            {listTasks.map((tasks)=>{
              if(tasks.day==='Terça'){
                return <p key={tasks.id}>{tasks.text}</p>
              }
            })}
          </div>
          <div>Quarta-Feira
            <hr  />
            {listTasks.map((tasks)=>{
              if(tasks.day==='Quarta'){
                return <p key={tasks.id}>{tasks.text}
           </p>   }
            })}
          </div>
          <div>Quinta-Feira
            <hr  />
            {listTasks.map((tasks)=>{
              if(tasks.day==='Quinta'){
                return <p key={tasks.id}>{tasks.text}</p>
              }
            })}
          </div>
          <div>Sexta-Feira
            <hr  />
            {listTasks.map((tasks)=>{
              if(tasks.day==='Sexta'){
                return <p key={tasks.id}>{tasks.text}</p>  
              }
            })}
          </div>
          <div>Sábado
            <hr  />
            {listTasks.map((tasks)=>{
              if(tasks.day==='Sabado'){
                return <p key={tasks.id}>{tasks.text}</p>
              }
            })}
          </div>
      </ContainerTasks>
      
    </div>
  );
}

export default App;
