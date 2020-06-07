import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

export default class AllPlayists extends React.Component{
    state={
        newPlaylist:"",
        playlists:[]
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
    componentDidMount=()=>{
        this.getPlaylists();
    }

    getPlaylists=()=>{
      axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists" ,
      {
          headers:{Authorization: "kessia-lopes-mello"}
      }
      ).then(response =>{
          this.setState({playlists:response.data.result.list});
        console.log(response);
      }).catch(err =>{
          console.log(err);
      }); 
    };
    deletePlaylist =(playlistId)=>{
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`,
        {
            headers:{Authorization:"kessia-lopes-mello"}
        }).then(() =>{
            alert("Playlist apagada");
            this.getPlaylists();
        }).catch(err =>{
            alert("Erro ao apagar playlist")
        });
    }
    render(){
        const loading = this.state.playlists.length === 0 && <h3>carregando...</h3>
        return(
            <div>
                <h1>Spotika</h1>
                <hr />
                <input
                value={this.state.newPlaylist}
                placeholder={"Playlist"}
                onChange={this.onChangeInput}/>
                <button onClick={this.createPlaylist}>Criar Playlist</button>
                <div>
                <h2>Suas Playlists</h2>
                {loading}
                <ul>
                        {this.state.playlists.map(playlist =>{
                            return <li key={playlist.id}><strong>Nome da playlist: </strong>{playlist.name} <button onClick={()=>this.deletePlaylist(playlist.id)}>x</button> <p><strong>id da playlist:</strong></p> {playlist.id}<hr /></li>
                        })}
                        
                </ul>
            </div>

            </div>
        )
    };
}