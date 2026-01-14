import styled from "styled-components";
import api from "../../services/api.js";

const Entrar = styled.button`
    margin-bottom: 10%;
    width: 132px;
    height: 32px;
    border-radius: 20px;
    border: none;
    font-size: 16px;
    font-weight: bold;
    color: #F9F9F9;
    background-color: #678AFF;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
        background-color: #84a1ff;
        transform: scale(1.1);
    }
`;

function EntrarBtn({ login, senha }) {

    async function LoginAdministrator() {
        console.log(login, senha);
        let Login = await api.get(`/Administrator/${login}/${senha}`);
        console.log(Login);
    }

    return (
        <>
            <Entrar onClick={LoginAdministrator}>Entrar</Entrar>
        </>
    );
}

export default EntrarBtn;