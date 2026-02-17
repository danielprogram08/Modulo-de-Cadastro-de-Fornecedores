import "./App.css";
import logo from "../../assets/insight-logo.png";
import LoginBtn from "../button/LoginBtn.jsx";
import LoginGmailBtn from "../button/LoginGmailBtn.jsx"
import LoginInput from "../input/LoginInput.jsx"
import PasswordInput from "../input/PasswordInput.jsx";

function App() {
  return (
    <>
      <div className="Container">
        <img src={logo} className="logo" alt="logo-insight" />
        <h1>Bem-Vindo!</h1>
        <div className="inputs">
          <LoginInput />
          <PasswordInput />
        </div>
        <div className="buttons">
          <LoginBtn />
          <LoginGmailBtn />
        </div>
      </div>
    </>
  );
}

export default App;