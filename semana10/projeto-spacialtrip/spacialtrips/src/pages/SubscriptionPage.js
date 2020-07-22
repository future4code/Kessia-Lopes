import React from 'react';
import {useHistory} from 'react-router-dom';

import styled from 'styled-components';
import Logo from '../imge/logo-spacet.png';

const Header = styled.header`
display: flex;
width: 100%;
height:15vh;
background-color: #212121;
color: #ffee58;
font-family: 'Russo One', sans-serif;
margin: 0;
justify-content: space-between;

`
const ImageLogo = styled.img`
width: 10vw;
height: 15vh;
margin: auto 0px;
`
const Navegation = styled.h3`
cursor: pointer;
`
const Wellcome = styled.div`
background-color: white;
text-align: center;`

const Form = styled.form`
display: flex;
background-color: #ffff8b;
flex-direction: column;
margin: auto;
padding: 2px;
width: 40vw;
height: 50vh;
border-radius: 3px;
opacity: 0.9;
`
const Input = styled.input`
width:20vw ;
`
const Botao = styled.button`
margin: auto;
width:5vw ;
background-color: #ffee58;
border-radius: 4px;
`


function SubscriptionPage (){
    const history = useHistory();

    const goToHomePage = () => {
        history.push("/");
      };
    
      const goToLoginPage = () => {
        history.push("/Login");
      };
    return(
    <>
          <Header>
          <ImageLogo src={Logo}></ImageLogo>
          <Navegation onClick={goToHomePage}>Home</Navegation>
          <Navegation onClick={goToLoginPage}>Login</Navegation>
          </Header>
          <hr />
          <Wellcome>
              <h1>Embarque nessa aventura!</h1> 
          </Wellcome>
          <Form>
            <label>Nome:
            <Input type= "text"/>
            </label>
            <label>Idade:
            <Input type="number"/>
            </label>
            <label>E-mail:
            <Input/>
            </label>
            <label>Profissão:
            <Input/>
            </label>
            <label>Por que você deve viajar conosco?
            <textarea/>
            </label>
            <label>Qual seu país?</label>
            <select>
              <option></option>
              <option>Brasil</option>
              <option>Inglaterra</option>
              <option>Ucrania</option>
              <option>Nova Zelandia</option>
              <option>Austria</option>
              <option>Haiti</option>
              <option>Paquistão</option>
              <option>China</option>

            </select>
            <label>Selecione o Planeta</label>
            <select>
              <option></option>
              <option>Marte</option>
              <option>Mercurio</option>
              <option>Jupter</option>
              <option>Saturno</option>
              <option>Netuno</option>
              <option>Terra</option>
              <option>Plutão</option>
              <option>Venus</option>

            </select>
            <Botao>Enviar</Botao>
          </Form>
      </>
    )

}
export default SubscriptionPage;