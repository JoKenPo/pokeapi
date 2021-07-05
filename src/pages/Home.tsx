import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../assets/images/pokeapi-logo.png';

import { Button } from '../components/Button';

// import api from "../services/api";


import '../styles/auth.scss';

export function Home() {
    const [loginValues, setLoginValues] = useState();

    
    async function handleSignUp(event: FormEvent) {
        event.preventDefault();
        // const { username, email, password } = loginValues;
        // if (!username || !email || !password) {
        //   setLoginValues({ error: "Preencha todos os dados para se cadastrar" });
        // } else {
        //   try {
        //     await api.post("/users", { username, email, password });
        //     this.props.history.push("/");
        //   } catch (err) {
        //     console.log(err);
        //     setLoginValues({ error: "Ocorreu um erro ao registrar sua conta. T.T" });
        //   }
        // }
    };

    return (
        <div id="page-auth">
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="POKEAPI" />
                    <form onSubmit={handleSignUp}>
                        <input
                            type="text"
                            placeholder="Digite o e-mail"
                        />
                        <input
                            type="password"
                            placeholder="Digite sua senha"
                        />
                        <Link to="/list/offset=0">
                            <Button type="submit">
                                Entre no POKEAPI
                            </Button>
                        </Link>
                    </form>
                </div>
            </main>
        </div>
    )
}