import React from 'react';
import './App.css';
import styled from 'styled-components';
import Post from './components/Post/Post';
import perfilUm from './img/imagem.jpeg'
import perfilDois from './img/image4.jpg'
import perfilTres from './img/image3.jpg'
import postagemUm from './img/imgage1.jpg'
import postagemDois from './img/image2.jpg'
import postagemTres from './img/image6.jpg'

class App extends React.Component {
  state={
    postagens : [
      {
          nomeUsuario:'Kessia',
          fotoUsuario:perfilUm,
          fotoPost:postagemUm
    },
    {
          nomeUsuario:'Angelica',
          fotoUsuario:perfilDois,
          fotoPost:postagemDois
    },
    {
          nomeUsuario:'Lucas',
          fotoUsuario:perfilTres,
          fotoPost:postagemTres

    }
      
      
    ],
    valorInputUser: "",
    valorInputFoto: "",
    valorInputPost: ""  
  };
  addPost = () => {
    
    const dadosDoPost = {
     
      nomeUsuario: this.state.valorInputUser,
    
      fotoUsuario: this.state.valorInputFoto,

      fotoPost: this.state.valorInputPost,
    };

    const novoPost = [...this.state.postagens, dadosDoPost];

    
    this.setState({ postagens: novoPost });
  };

  onChangeInputUser = (event) => {
    
    this.setState({ valorInputUser: event.target.value });
  };

  onChangeInputFoto = (event) => {
    
    this.setState({ valorInputFoto: event.target.value });
  };
  onChangeInputPost = (event) => {
    
    this.setState({ valorInputPost: event.target.value });
  };
  render() {
    const listaDePosts= this.state.postagens.map((postagem)=>
       (
        <Post
          nomeUsuario={postagem.nomeUsuario}
          fotoUsuario={postagem.fotoUsuario}
          fotoPost={postagem.fotoPost}
        />
      )

    );
    return (
      <div className={'app-container'}>
        <form>
          <input
            placeholder={"Username"}
            value={this.state.valorInputUser}
            onChange={this.onChangeInputUser}
          />
          <input
          placeholder={"Url profile picture"}
          value={this.state.valorInputFoto}
          onChange={this.onChangeInputFoto}
          />
          <input
            placeholder={"Url picture post"}
            value={this.state.valorInputPost}
            onChange={this.onChangeInputPost}
          />

          <button onClick={this.addPost}>Adicionar Postagem</button>
        </form>
        <Post>
          {listaDePosts}
        </Post>
      </div>
    );
  }
}

export default App;
