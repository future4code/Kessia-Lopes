import React,{useState, useEffect} from "react";
import styled from  'styled-components';
import axios from "axios";

const MatchList =(props) =>{
    const [matchs, setMatchs] = useState([])

    const getMatchs = () => {
        const body={
            id:matchs.id,
            choise: true

        }
        axios
        .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/kessia/matches",body)
        .then(response =>{
            setMatchs(response.data.profile)
        }).catch (err =>{
            console.log("Erro")
        })
    }
    useEffect(()=>{
        getMatchs()
    },[matchs])
  return (
    <div className="MatchList">
        {matchs.map(match=>{
            return(
                <ul>
                   <li><img src={match.photo}/><p>{match.name}</p></li> 
                </ul>
            )
        }
            )}
            <div>
            <button onClick ={props.pageTwo}>Profile</button>
            </div>
    
    </div>
  );
}

export default MatchList;