import "./App.css";
import logo from "../assets/insight-logo.png";
import gmailLogo from "../assets/gmail-logo.png"

function App() {
  return (
    <>
      <div className="Container">
        <img src={logo} id="logo" alt="logo-insight" />
        <h1>Bem-Vindo!</h1>
        <div className="inputs">
          <input type="text" id="login" placeholder="Login:"/>
          <input type="password" id="senha" placeholder="Senha:"/>
        </div>
        <div className="buttons">
          <button id="Entrar-btn">Entrar</button>
          <button id="Entrar-Gmail-btn">
            <p>Entrar com Gmail</p>
            <img id="logo-gmail" src={gmailLogo} alt="gmail-logo" />
          </button>
        </div>
      </div>
    </>
  );
}

export default App;