import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import fotoPerfil from './imagens/ft-perfil.jpeg';
import logoUgb from './imagens/ugb.jpg';
import logoCamara from './imagens/camara.png';
import CardPequeno from './components/CardPequeno/CardPequeno';
import logoLabenu from './imagens/labenu.png';
import logoEstacio from './imagens/estacio.jpg';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={fotoPerfil} 
          nome="Késsia Lopes" 
          descricao="Oi, eu sou a Késsia. Sou aluna da Labenu e estudante de Sistemas na Estácio. Em busca de aprendizado e aprimoramento sempre."
        />
        <h2>Contato</h2>
        <CardPequeno
          email="kessials@hotmail.com"
          endereco="End: Rua Hevo, 84"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={logoUgb} 
          nome="Universidade Geraldo DiBiase-Biblioteca" 
          descricao="Cadastrando alunos e livros no sistema. Fazendo controle das locações e entregas. Realizando inventários" 
        />
        <h3>Contato</h3>
        <CardPequeno
          email="ugb@hotmail.com"
          endereco="End: Rua Forfun,2009"
        />
        
        <CardGrande 
          imagem={logoCamara}
          nome="Câmara Municipal de Barra do Pírai" 
          descricao="Digitando as atas das reuniões." 
        />
        <h3>Contato</h3>
         <CardPequeno
          email="camarabarradopirai@hotmail.com"
          endereco="End: Rua Scracho, 10"
        />
      </div>    
      <div className="page-section-container">
        <h2>Formação</h2>
      <CardGrande 
          imagem={logoLabenu}
          nome="Labenu" 
          descricao="Cursando: Desenvolvimento FullStack" 
        />
        <CardGrande 
          imagem={logoEstacio}
          nome="Estácio de Sá" 
          descricao="Cursando: Sistemas de Informação" 
        />

      </div>
      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
