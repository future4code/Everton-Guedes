import styled from "styled-components";
import React from "react";

const PlaylistDetailContainer = styled.div`

`

export default class PlaylistDetail extends React.Component {
    state = {

    }
    
    render() {
        return (
            <PlaylistDetailContainer>
                <button onClick={() => this.props.mudarPagina("playlists")}>Voltar para Playlists</button>
            </PlaylistDetailContainer>
        );
    }
}

