import React, { useState } from "react";
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const PaginaLogin = () => {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const handleGoToCadastro = (history) => {
        history.push("/cadastro")
    }

    const handleAtualizaEmail = (event) => {
        const novoEmail = event.target.value
        setEmail(novoEmail)
    }

    const handleAtualizaSenha = (event) => {
        const novaSenha = event.target.value
        setSenha(novaSenha)
    }

    const handleLogin = async (event) => {
        event.preventDefault();
        const body = {
            email: email,
            senha: senha,
        }

        return (
            <Container component="main" maxWidth="xs">
                <div>
                    <Avatar>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Entrar!
                    </Typography>
                    <form onSubmit={handleLogin}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="E-mail"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={handleAtualizaEmail}
                            value={email}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Senha"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={handleAtualizaSenha}
                            value={senha}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                        >
                            Entrar
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link href="#" onClick={handleGoToCadastro} variant="body2">
                                    {"Não tem conta? Cadastre-se"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        )
    }
}
export default PaginaLogin