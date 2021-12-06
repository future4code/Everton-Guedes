import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PaginaLogin from "../pages/PaginaLogin/PaginaLogin";
import PaginaCadastro from "../pages/PaginaCadastro/PaginaCadastro";
import PaginaFeed from "../pages/PaginaFeed/PaginaFeed";
import PaginaPost from "../pages/PaginaPost/PaginaPost";
import PaginaErro from "../pages/PaginaErro/PaginaErro";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/login">
                    <PaginaLogin />
                </Route>

                <Route exact path="/cadastro">
                    <PaginaCadastro />
                </Route>

                <Route exact path="/">
                    <PaginaFeed />
                </Route>

                <Route exact path="/adicionar-post">
                    <PaginaPost />
                </Route>

                <Route>
                    <PaginaErro />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router