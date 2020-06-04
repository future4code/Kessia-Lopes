import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

class App extends React.Component{
  state={
    history:[],
    events:[]
  };
  componentDidMount =()=>{
    axios.get("https://api.spacexdata.com/v3/history"
      ).then(response =>{
        console.log(response.data)
        this.setState({history: response.data})
      })
      .catch(err =>{
        console.log(err);
      })
  };
 getHistory = (e) =>{
    const historical = e.target.value;
    axios.get(`https://api.spacexdata.com/v3/history/${historical}`
    ).then(response =>{
      this.setState({events: response.data})
    })
    .catch(err =>{
      console.log(err);
    })
  };
  render() {
    return(
      <div>
        <select onChange={this.getHistory}>
        {this.state.history.map(historys => {
            return <option value={historys.title}>{historys.title}</option>;
          })}

        </select>
        <ul>
        {this.state.history.map(historys => { return <li>{historys.title}:</li>})}
        </ul>
      </div>

    );}
}
export default App;
