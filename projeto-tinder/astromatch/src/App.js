import React,{useState, useEffect} from "react";
import styled from 'styled-components';
import axios from "axios";

import Profile from './components/Profile'
import MatchList from './components/MatchList.js'

const Page = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const BtnClear = styled.div`
display: flex;
justify-content: flex-end;
`

const App =() =>{
  const[clear, setClear] = useState("")
  const[profileOrMatch, setProfileOrMatch] = useState(true)

  const putClear=()=>{
    const body ={
      id:clear.id
    }
    axios
    .put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/kessia/clear", body)
    .then(response=>{
      setClear(response.data)
    }).catch(err =>{
      console.log("Erro")
    })
  };
  const choosePage=()=>{
    setProfileOrMatch(!profileOrMatch)
  };
  const renderPage =()=>{  if (profileOrMatch) {
    return (
      <div>
        <Profile pageOne={choosePage} />
      </div>
    );
  } else {
    return (
      <div>
        <MatchList pageTwo={choosePage} />
      </div>
    );
  }
}
  return (
    <Page className="App">
      <h1>Astromatch</h1>
      <div>
        {renderPage()}
      </div>
      <BtnClear>  
      <button onClick ={putClear()}>Limpar matches</button>
      </BtnClear>
      
    </Page>
  );
}

export default App;
