import React from "react";
import styled from "styled-components";

const PlaylistFormularioContainer = styled.div`
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const CriarPlaylist = styled.div`
    height: 100px;
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: space-around;
`

export default class PlaylistFormulario extends React.Component {
    state = {

    }
    render() {
        return (
            <PlaylistFormularioContainer>
                <h1>Cadastrar Nova Playlist</h1>
                <CriarPlaylist>
                    <label>Nova Playlist</label>
                    <input placeholder="Nome da Playlist" />
                    <button>Cadastrar Playlist</button>
                </CriarPlaylist>            
            </PlaylistFormularioContainer>
        );
    }
}

