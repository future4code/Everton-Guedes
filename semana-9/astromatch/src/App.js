import React, { useState } from 'react';
import { HomePage } from "./Pages/HomePage/HomePage";
import { MatchesPage } from "./Pages/MatchesPage/MatchesPage";

const App = () => {
  const [paginaAtual, setPaginaAtual] = useState("home")

  const mudarPagina = () => {
    switch (paginaAtual) {
      case "home":
        return <HomePage irParaMatches={irParaMatches} />
      case "matches":
        return <MatchesPage irParaHome={irParaHome} />
      default:
        return <div>"Erro! Página não encontrada."</div>
    }
  }

  const irParaHome = () => {
    setPaginaAtual("home")
  }

  const irParaMatches = () => {
    setPaginaAtual("matches")
  }

  const limparMatches = () => {

  }

  return (
    <div>
      <p>Oi</p>
      {mudarPagina()}
      <button onClick={limparMatches}>Limpar Matches</button>
    </div>
  )

};

export default App

