import React, {useState, useEffect} from 'react';
import './App.css';

import axios from 'axios';
import styled from 'styled-components';

import {ContainerTasks} from './styled/styles.js';
import {Button, TextField, InputLabel, Select, MenuItem} from '@material-ui/core';
import {CssBaseline} from '@material-ui/core';

const FormContainer = styled.form`
display: grid;
grid-auto-flow: column;
gap: 10px;
margin: 25px;
`
const Delete = styled.span`
color: red;
font-size: 10px;
cursor: pointer;
`
const Edit = styled.span`
color: blue;
font-size: 10px;
cursor: pointer;
`

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
      setDay('');
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

  const deleteTask = async(taskId)=>{
  
   axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-mello-kessia/${taskId}`)
    .then(()=>{
      getListTasks();
    }).catch(err=>{
      console.log("err")
    })
  };

  const editTask = async(taskId) =>{
    axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-mello-kessia/${taskId}`)
    .then(()=>{
      getListTasks();
    }).catch(err=>{
      console.log('err')
    })
  };
// 

  return (
    <div className="App">
      <CssBaseline />
      <h1>
        Planner
      </h1>
      <FormContainer onSubmit={createTask}>
        <TextField label={"Nova Tarefa"} placeholder="Nova Tarefa" required  onChange ={handleInputValue}/>
        <InputLabel id="select-day">Dia:</InputLabel>
        <Select labelId="select-day" placeholder="Dia" required onChange = {handleSelectValue}>
            <MenuItem value =""></MenuItem>
            <MenuItem value ="Sunday">Domingo</MenuItem>
            <MenuItem value ="Monday">Segunda-Feira</MenuItem>
            <MenuItem value ="Thuesday">Terça-Feira</MenuItem>
            <MenuItem value ="Wenesday">Quarta-Feira</MenuItem>
            <MenuItem value ="Thursday">Quinta-Feira</MenuItem>
            <MenuItem value ="Friday">Sexta-Feira</MenuItem>
            <MenuItem value ="Saturday">Sábado</MenuItem>
          </Select>
         
         <Button variant={'contained'} color={'secondary'}type ="submit">Criar Tarefa</Button>
      </FormContainer>
      <ContainerTasks>
          <div>Domingo
            <hr  />
            {listTasks.map((tasks)=>{
              if(tasks.day==='Sunday'){
                return <ul><li key={tasks.id}>{tasks.text}</li>
                 <Delete onClick={()=>deleteTask(tasks.id)}>delete</Delete>
                 <Edit onClick ={()=>editTask(tasks.id)}> editar</Edit>
                 </ul> 
                
              }
            })}
          </div>
          <div>Segunda-Feira
          <hr  />
            {listTasks.map((tasks)=>{
              if(tasks.day==='Monday'){
                return <ul><li key={tasks.id}>{tasks.text}</li>
                 <Delete onClick={()=>deleteTask(tasks.id)}>delete</Delete>
                 <Edit onClick ={()=>editTask(tasks.id)}> editar</Edit>
                 </ul>
              }
            })}
          </div>
          <div>Terça-Feira
            <hr  />
            {listTasks.map((tasks)=>{
              if(tasks.day==='Thuesday'){
                return <ul><li key={tasks.id}>{tasks.text}</li>
                 <Delete onClick={()=>deleteTask(tasks.id)}>delete</Delete>
                 <Edit onClick ={()=>editTask(tasks.id)}> editar</Edit>
                 </ul>
              }
            })}
          </div>
          <div>Quarta-Feira
            <hr  />
            {listTasks.map((tasks)=>{
              if(tasks.day==='Wenesday'){
                return <ul><li key={tasks.id}>{tasks.text}</li>
                 <Delete onClick={()=>deleteTask(tasks.id)}>delete</Delete>
                 <Edit onClick ={()=>editTask(tasks.id)}> editar</Edit>
                 </ul>   }
            })}
          </div>
          <div>Quinta-Feira
            <hr  />
            {listTasks.map((tasks)=>{
              if(tasks.day==='Thursday'){
                return <ul><li key={tasks.id}>{tasks.text}</li>
                 <Delete onClick={()=>deleteTask(tasks.id)}>delete</Delete>
                 <Edit onClick ={()=>editTask(tasks.id)}> editar</Edit>
                 </ul>
              }
            })}
          </div>
          <div>Sexta-Feira
            <hr  />
            {listTasks.map((tasks)=>{
              if(tasks.day==='Friday'){
                return <ul><li key={tasks.id}>{tasks.text}</li>
                 <Delete onClick={()=>deleteTask(tasks.id)}>delete</Delete>
                 <Edit onClick ={()=>editTask(tasks.id)}> editar</Edit>
                 </ul>  
              }
            })}
          </div>
          <div>Sábado
            <hr  />
            {listTasks.map((tasks)=>{
              if(tasks.day==='Saturday'){
                return <ul><li key={tasks.id}>{tasks.text}</li>
                 <Delete onClick={()=>deleteTask(tasks.id)}>delete</Delete>
                 <Edit onClick ={()=>editTask(tasks.id)}> editar</Edit>
                 </ul>
              }
            })}
          </div>
      </ContainerTasks>
      
    </div>
  );
}

export default App;
