import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Pageone = styled.div`
font-family: 'Russo One', sans-serif;
display: flex;
align-items: center;
flex-direction:column;`

const Btnuser = styled.button`
font-family: 'Russo One', sans-serif;
color: white;
background-color: black;
border-radius: 5px;
padding: 5%;
margin: 4px;


`
 const Form = styled.form`
 display: flex;
 flex-direction: column;
 border: 1px solid black;
 border-radius: 5px;
 padding: 5%;
 margin: 2px;
 
 `
class Register extends React.Component {
  state={
    name:"",
    email:""
  };
  //Funções que atribuem os valores digitados a variaveis, para guardar no estado
  changeInputName =(e)=>{
    const newUser = e.target.value;
    this.setState({name: newUser});
  }
  changeInputEmail =(e)=>{
    const newUserEmail = e.target.value;
    this.setState({email: newUserEmail});
  }
  //Função que cria um novo usuário no banco de dados, a partir dos valores dos estados
 createUser=()=>{
   const body ={
     name: this.state.name,
     email: this.state.email
   };
   axios
   .post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body,
   {
     headers:{Authorization:"kessia-lopes-mello"}
   })
   .then(response =>{
    alert(`Usuário ${this.state.name} criado com sucesso`);
    console.log(response);
    this.setState({name: ""});
    this.setState({email:""})
  })
  .catch(err => {
    alert("Ooops! Algo deu errado");
    console.log(err);
  });
};
 
//area de renderização
    render(){
  return (
    <Pageone>
       <h1>Cadastro de usurário</h1>
            <Form>
                <label>Novo usuário:</label>
                <input 
                type="text"
                placeholder="Digite um nome"
                value={this.state.name}
                onChange={this.changeInputName}
                />
                <label>E-mail:</label>
                <input
                type="e-mail"
                placeholder="Digite um e-mail"
                value={this.state.email}
                onChange={this.changeInputEmail}
                />
                <Btnuser onClick={this.createUser}>Criar Usuário</Btnuser>
            </Form>
    </Pageone>
  );}

}
export default Register;
