import styled from "styled-components";
import React from "react";

const PlaylistsContainer = styled.div`

`

export default class Playlists extends React.Component {
    state = {

    }
    
    render() {
        return (
            <PlaylistsContainer>
                <button onClick={() => this.props.mudarPagina("playlistDetail")}>Abrir Playlist</button>
            </PlaylistsContainer>
        );
    }
}

