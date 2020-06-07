import React from 'react';
import Firstpage from './components/Spotika.js';
import AllPlaylists from './components/AllPlaylists.js';
import AddMusic from './components/AddMusic.js';
import Details from './components/Details.js';
import styled from 'styled-components';
import axios from 'axios';
const Btn = styled.button`
cursor: pointer;
border-radius:30px;
width: 50px;
height: 50px;
background-image: radial-gradient(black, blue);
color: white;
`
const Botoes = styled.div`
height:5%;
position:bottom;
text-align: center;



`
const Container = styled.div`
height: 650px;
box-sizing:border-box;



`


class App extends React.Component {
  state={
    page:1,
  };
  pageRender(){
    switch(this.state.page){
      case 1:
        return <Firstpage/>;
      case 2:
        return <AllPlaylists/>;
      case 3:
        return <AddMusic/>;
      case 4:
        return <Details/>;
    }
  };
      nextPage =()=>{
      this.setState({page: this.state.page + 1});
    };
      backPage =()=>{
      this.setState({page: this.state.page - 1});
    };
  render(){
    const next = ">";
    const back = "<";
  return (
    <Container>
      <div>
        {this.pageRender()}
      </div>
      
      <Botoes>
        
        <Btn onClick={this.backPage}>{back}</Btn>
        <Btn onClick={this.nextPage}>{next}  </Btn>
        
      </Botoes>
    </Container>
  )};
}

export default App;
