import "./Button.css";
import gmail from "../../assets/gmail.png"

function EntrarGmailBtn() {

    return (
        <>
            <button className="btnLoginGmail">
                Entrar com Gmail
                <img src={gmail} className="logoGmail" alt="logo-gmail"/>
            </button>
        </>
    );
}

export default EntrarGmailBtn;