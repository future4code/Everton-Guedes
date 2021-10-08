import axios from "axios";
import React, { useEffect, useState } from "react";
import { HomeContainer, ImagemPerfil, Perfil } from "./Styled";



export const HomePage = (props) => {
    const [profile, setProfile] = useState({})

    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/everton-guedes-aluno/person"

    useEffect(() => {
        getProfile()
    }, [])

    const getProfile = () => {
        axios.get(url)
            .then((response) => {
                setProfile(response.data.profile)
            })
            .catch((error) => {
                console.log(error.response)
            })
    }

    const escolherPessoa = () => {

    }

    return (
        <HomeContainer>
            <Perfil>
                <ImagemPerfil src={profile.photo} />
                <h1>{profile.name}, {profile.age}</h1>
                <p>{profile.bio}</p>
                <div>
                    <button onClick={escolherPessoa}>❌</button>
                    <button onClick={escolherPessoa}>💚</button>
                </div>
            </Perfil>
            <div>
                <button onClick={props.irParaMatches}>Ir para Matches</button>
            </div>
        </HomeContainer>
    )
}