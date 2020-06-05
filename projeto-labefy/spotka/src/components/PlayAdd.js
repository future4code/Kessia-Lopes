import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

export default class PageAdd extends React.Component{
    state={
        newPlaylist:"",
    }
    createPlaylist =()=>{
        const body ={
            name: this.state.newPlaylist
        };
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        ,body,{
            headers:{Authorization:"kessia-lopes-mello"}
        }).then(response =>{
            console.log(response);
            this.setState({newPlaylist:""});
            alert("Playist criada.");
        }).catch(err=>{
            console.log(err)
            alert("Playlist não pode ser criada.");
        }) 
    };
    onChangeInput = (e)=>{
        this.setState({newPlaylist:e.target.value})
    }
    render(){
        return(
            <div>
                <h1>Spotika</h1>
                <hr />
                <input
                value={this.state.newPlaylist}
                placeholder={"Playlist"}
                onChange={this.onChangeInput}/>
                <button onClick={this.createPlaylist}>Criar Playlist</button>

            </div>
        )
    };
}