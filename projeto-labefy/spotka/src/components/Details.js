import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

export default class Details extends React.Component{
    state={
        playlists:[],
        musics:[]  
    };
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

    getTracks=(playlistId)=>{
      axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`,
      {
          headers:{Authorization: "kessia-lopes-mello"}
      }
      ).then(response =>{
          this.setState({musics:response.data.result.tracks});
        console.log(response);
      }).catch(err =>{
          console.log(err);
      }); 
    
    };
    /*deletePlaylist =(playlistId)=>{
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`,
        {
            headers:{Authorization:"kessia-lopes-mello"}
        }).then(() =>{
            alert("Playlist apagada");
            this.getPlaylists();
        }).catch(err =>{
            alert("Erro ao apagar playlist")
        });
    }*/
    render(){
        
        return(
            <div>
                <h1>Spotika</h1>
                <h2>Detalhes das playlists</h2>
                <ul>
                        {this.state.playlists.map(playlist =>{
                            return <li key={playlist.id}><strong>Nome da playlist: </strong>{playlist.name} <button onClick={()=>this.getTracks()}>Detalhes</button><p>{this.state.musics}</p><hr /></li>
                        })}
                        
                </ul>
            </div>
        );
        }
}