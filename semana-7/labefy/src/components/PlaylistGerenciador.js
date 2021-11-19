import styled from "styled-components";
import React from "react";
import Playlists from "./Playlists";
import PlaylistDetail from "./PlaylistDetail";

const PlaylistGerenciadorContainer = styled.div`

`

export default class PlaylistGerenciador extends React.Component {
    state = {
        paginaAtual: "playlists"
    }

    mudarPagina = (paginaAtual) => {
        this.setState({paginaAtual: paginaAtual})
    }

    render() {
        const renderPaginaAtual = () => {
            if (this.state.paginaAtual === "playlists") {
                return <Playlists
                mudarPagina= {this.mudarPagina}
                />
            } else if (this.state.paginaAtual === "playlistDetail") {
                return <PlaylistDetail
                mudarPagina= {this.mudarPagina}
                />
            }
        }
        return (
            <PlaylistGerenciadorContainer>
                {renderPaginaAtual()}
            </PlaylistGerenciadorContainer>
        );
    }
}

