import React,{useState, useEffect} from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 50%;
height: 450px;
border: 1px solid black;

`
const Image = styled.img`
display: flex;
width:50%;
height: 50%;
margin: auto;
`
const Details= styled.div`
display: flex;
flex-direction: column;
`
const Btns= styled.div`
display: flex;
justify-content: space-between;
cursor: pointer;
`


const Profile =(props)=>{
    const [profile, setProfile] = useState({})

    const getProfile = () => {
        axios
        .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/kessia/person")
        .then(response =>{
            setProfile(response.data.profile)
        }).catch (err =>{
            console.log("Erro")
        })
    }
    useEffect(()=>{
        getProfile()
    },[])
    const choiceLike =(choice) =>{
        const body ={
            id: profile.id,
            choice: choice
        };
        axios
        .post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/kessia/choose-person",body)
        .then(response =>{
            getProfile()
        }).catch(err=>{
            console.log("Erro")
        })

    }
    const chooseLike =()=>{
        choiceLike(true)
        getProfile()
    }
    const chooseDislike =()=>{
     choiceLike(false)
     getProfile()
    }

    return (
      <> 
      <Container className="Profile">
          <Details>
          <Image src={profile.photo}/>
          
          <h3>{profile.name}, {profile.age}</h3>
          <p>{profile.bio}</p>
          <Btns>
          <button onClick={chooseDislike}>X</button>
          <button onClick={chooseLike}>like</button>
          </Btns>
          </Details>

      </Container>
      <div>
      <button onClick={props.pageOne}>Matches</button>
      </div>
      </> 
    );
  }
  
  export default Profile;