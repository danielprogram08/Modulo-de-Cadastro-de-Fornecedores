import styled from "styled-components";
import { useState } from "react";

const StyledLogin = styled.input`
    background-color: #dadada;
    height: 35px;
    width: 270px;
    padding-left: 10px;
    border-radius: 10px;
    border: none;
    text-indent: 10px;
    margin-bottom: 10%;

    &::placeholder {
        font-weight: bold;
        opacity: 0.5;
    }
`;

function LoginInput(props) {

    const [login, setLogin] = useState("");
    const LoginChange = (event) => {
        setLogin(event.target.value);
    }

    return (
        <>
            <StyledLogin type="text" placeholder="Login:" value={login} onChange={LoginChange} {...props} />
        </>
    );
}

const StyledPassword = styled.input`
    background-color: #dadada;
    height: 35px;
    width: 270px;
    padding-left: 10px;
    border-radius: 10px;
    border: none;
    text-indent: 10px;

    &::placeholder {
        font-weight: bold;
        opacity: 0.5;
    }
`;

function PasswordInput(props) {
    
    const [senha, setSenha] = useState("");
    const SenhaChange = (event) => {
        setSenha(event.target.value);
    }

    return (
        <>
            <StyledPassword type="password" placeholder="Senha:" value={senha} onChange={SenhaChange} {...props} />
        </>
    );
}

export default { LoginInput, PasswordInput };