import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import perfilUm from './img/imagem.jpeg'
import perfilDois from './img/image4.jpg'
import perfilTres from './img/image3.jpg'
import postagemUm from './img/imgage1.jpg'
import postagemDois from './img/image2.jpg'
import postagemTres from './img/image6.jpg'

class App extends React.Component {
  state={
    postagens=[
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
      
    ]

  };
  render() {
    const listaDePosts= this.state.postagens.map((postagem)=>{

    });
    return (
      <div className={'app-container'}>
        <div>{listaDePosts}</div>
      </div>
    );
  }
}

export default App;
