import React from "react";
import Register from "./components/Register.js";
import Userlist from "./components/Userlist.js";
import styled from 'styled-components';

const Btn=styled.button`
font-family: 'Russo One', sans-serif;
`

export default class App extends React.Component{
  state={
    showpage:"pageRegister"
  }
  changePage=()=>{
    if (this.state.showpage === "pageRegister"){
      this.setState({showpage: "pageUserlist"})
    }
    else{
      this.setState({showpage:"pageRegister"})
    }

  }
  render(){
    return(
      <div>
        <Btn onClick={this.changePage}>Troca de página</Btn>
        {this.state.showpage==="pageRegister"?(<Register/>):(<Userlist/>)}
      </div>

    );
  }
}
