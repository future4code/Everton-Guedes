import React from "react";
import axios from "axios";
import styled from "styled-components";

const CardUsuarios = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 300px;
`

export default class TelaListaUsuarios extends React.Component {
    state = {
        usuarios: []
    }

    componentDidMount() {
        this.pegarUsuarios()
    }

    pegarUsuarios = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        axios.get(url, {
            headers: {
                Authorization: "everton-guedes"
            }
        })
        .then((response) => {
            this.setState({usuarios: response.data})
        })
        .catch((error) => {
            alert("Ocorreu um problema, tente novamente")
        })
    }

    render() {
        
        const listaUsuarios = this.state.usuarios.map((user) => {
            return <CardUsuarios key={user.id}>{}user.name</CardUsuarios>
        })

        return (
            <div>
                <button onClick={this.props.irParaCadastro}>Ir para Cadastro</button>
                <h2>Lista de Usuários</h2>
                {listaUsuarios}
            </div>
        )
    }
}