import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

export default class AddMusic extends React.Component{
    state={
        playlists:[],
        name:"",
        artist:"",
        url:"",
    };
    changeName = (e) =>{
        const newName = e.target.value;
        this.setState({name: newName})
    };
    changeArtist = (e) =>{
        const newArtist = e.target.value;
        this.setState({artist: newArtist})
    };
    changeUrl= (e) =>{
        const newUrl = e.target.value;
        this.setState({url: newUrl})
    };
    changeId= (e) =>{
        const newId = e.target.value;
        this.setState({id: newId})
    };
    addMusic = (playlistId)=>{
        const body = {
            name: this.state.name,
            artist: this.state.artist,
            url: this.state.url
        }
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`, body,{
            headers:{Authorization:"kessia-lopes-mello"},
            
        }).then(()=>{
            alert(`${this.state.name} adicionada com sucesso!`);
            this.setState({name:"", artist:"", url:""})
        }).catch(err =>{
            alert(`Não foi possível adicionar ${this.state.name}`);
            console.log(err);
        });}
        
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
      componentDidMount=()=>{
        this.getPlaylists();
    }
    render(){
        return(
            <div>
                <form>
                    <legend><h1>Adicionar música</h1></legend>
                    <label for="name">Nome da música:</label>
                    <input
                    placeholder="Musica"
                    type="text"
                    value={this.state.name}
                    onChange={this.changeName}
                    name="name"
                    />
                    <label for="artist">Nome do artista:</label>
                    <input
                    placeholder="Artista"
                    type="text"
                    value={this.state.artist}
                    onChange={this.changeArtist}
                    name="artist"
                    />
                    <label for="url">Url da música:</label>
                    <input
                    placeholder="Url"
                    type="url"
                    value={this.state.url}
                    onChange={this.changeUrl}
                    name="url"
                    />
                    
                  
                </form>
                <div>
                    <h1>Spotika</h1>
                <h2>Escolha a playlist</h2>
                <ul>
                        {this.state.playlists.map(playlist =>{
                            return <li key={playlist.id}><strong>Nome da playlist: </strong>{playlist.name} <button onClick={()=>this.addMusic(playlist.id)}>Adicionar música</button><hr /></li>
                        })}
                        
                </ul>
            </div>
            </div>
        )
    };
}