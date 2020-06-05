import React from 'react';
import PlayAdd from './components/PlayAdd.js';
import AllPlaylists from './components/AllPlaylists.js';
import AddMusic from './components/AddMusic.js';
import Details from './components/Details.js';
import styled from 'styled-components';
import axios from 'axios';

class App extends React.Component {
  state={
    page:1,
  };
  pageRender(){
    switch(this.state.page){
      case 1:
        return <PlayAdd/>;
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
  return (
    
    <div>
      {this.pageRender()}
      <button onClick={this.backPage}>Back</button>
      <button onClick={this.nextPage}>Next</button>
      
    </div>
  )};
}

export default App;
