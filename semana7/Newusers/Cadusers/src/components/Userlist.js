import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const DeleteButton = styled.span`
  color: red;
  cursor: pointer;
`;
const Pagetwo = styled.div`
font-family: 'Russo One', sans-serif;
display: flex;
align-items: center;
flex-direction:column;
`
const Itemlist = styled.li`
background-color: black;
color: white;
font-size: 205%;
border-radius:5px;
`

const axiosConfig = {
  headers: {
    Authorization: "kessia-lopes-mello"
  }
};

class UsersList extends React.Component {
  state = {
    usersList: []
  };

  componentDidMount() {
    this.fetchUsersList();
  }

  fetchUsersList = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        axiosConfig
      )
      .then(response => {
        this.setState({ usersList: response.data });
      });
  };

  userDeletion = userId => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
        axiosConfig
      )
      .then(() => {
        alert("Usuário apagado com sucesso!");
        this.fetchUsersList();
      })
      .catch(e => {
        alert("ERRO AO APAGAR USUARIO");
      });
  };

  render() {
    return (
      <Pagetwo>
      <ul>
        {this.state.usersList.length === 0 && <div>Carregando...</div>}
        {this.state.usersList.map(user => {
          return (
            <Itemlist>
              {user.name}
              <DeleteButton onClick={() => this.userDeletion(user.id)}>
                X
              </DeleteButton>
            </Itemlist>
          );
        })}
      </ul>
      </Pagetwo>
    );
  }
}

export default UsersList;