import styled from "styled-components";
import gmail from "../../assets/gmail.png"

function EntrarGmailBtn() {
    const Logo = styled.img`
        height: 20px;
        width: 20px;
        padding-left: 5%;
    `;

    const EntrarGmail = styled.button`
        width: 132px;
        height: 32px;
        border-radius: 20px;
        border: none;
        font-size: 10px;
        font-weight: bold;
        color: #F9F9F9;
        background-color: #ff1d1dff;
        transition: all 0.3s ease-in-out;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
            background-color: #fc4747ff;
            transform: scale(1.1);
        }
    `;

    return (
        <>
            <EntrarGmail>
                Entrar com Gmail
                <Logo src={gmail} alt="logo-gmail" />
            </EntrarGmail>
        </>
    );
}

export default EntrarGmailBtn;