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
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'Kessia'}
          fotoUsuario={perfilUm}
          fotoPost={postagemUm}
        />
        <Post
          nomeUsuario={'Angelica'}
          fotoUsuario={perfilDois}
          fotoPost={postagemDois}
        />
        <Post
          nomeUsuario={'Lucas'}
          fotoUsuario={perfilTres}
          fotoPost={postagemTres}
        />
      </div>
    );
  }
}

export default App;
