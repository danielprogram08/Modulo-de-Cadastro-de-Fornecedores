import "./App.css";
import logo from "../../assets/insight-logo.png";
import gmail from "../../assets/gmail.png"
import { useForm } from "react-hook-form";

function App() {

const { handleSubmit, register, getValues } = useForm();

const onSubmit = (data) => {
  console.log(data);
};

const onSubmitGmail = () => {
  const values = getValues();
  const user = {
    name: values.inputLogin,
    password: values.inputPassword
  }
  console.log(user);
};

  return (
    <>
      <form className="Container" onSubmit={handleSubmit(onSubmit)}>
        <img src={logo} className="logo" alt="logo-insight" />
        <h1>Bem-Vindo!</h1>
        <div className="inputs">
          <input className="inputLogin" type="text" placeholder="Login:" {...register("inputLogin")}/>
          <input className="inputPassword" type="password" placeholder="Senha:" {...register("inputPassword")}/>
        </div>
        <div className="buttons">
          <button type="submit" className="btnLogin">Entrar</button>
          <button type="button" className="btnLoginGmail" onClick={onSubmitGmail}>
              Entrar com Gmail
              <img src={gmail} className="logoGmail" alt="logo-gmail"/>
          </button>
        </div>
      </form>
    </>
  );
}

export default App;