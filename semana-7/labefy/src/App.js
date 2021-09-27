import React from "react";
import styled from "styled-components";
import Axios from "axios";
import Header from "./components/header";
import PlaylistFormulario from "./components/PlaylistFormulario";
import PlaylistGerenciador from "./components/PlaylistGerenciador";

const CardContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: lightgreen;
  display: flex;
  flex-direction: column;

`

export default class App extends React.Component {
  state = {
    paginaAtual: "playlistFormulario"
  }

  mudarPagina = (paginaAtual) => {
    this.setState({paginaAtual: paginaAtual})
  }
  
  render (){
    const renderPaginaAtual = () => {
      if (this.state.paginaAtual === "playlistFormulario") {
        return <PlaylistFormulario />
      } else if (this.state.paginaAtual === "playlistGerenciador") {
        return <PlaylistGerenciador />
      }
    }

    return (
      <CardContainer>
        <Header
        mudarPagina={this.mudarPagina}
        />
        {renderPaginaAtual()}        
      </CardContainer>
    );
  }
  
}

