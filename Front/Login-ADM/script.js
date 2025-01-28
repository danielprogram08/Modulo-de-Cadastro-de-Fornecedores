import { showSpinnerLoading, hideSpinnerLoading } from "./Functions/Spinner_Loading/SpinnerScript.js";
import { alertEmptyFields, alertAdmNotFound, alertSucessLogin, alertErrorLogin } from "./Functions/Alerts/AlertScript.js";

function replacePassword() {
    window.location.href = "Replace_Password/index.html";
}

function btnLogin() {
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;

    showSpinnerLoading();

    if (name == "" || password == "") {
   
        alertEmptyFields();
        hideSpinnerLoading();
        
    } else {

    showSpinnerLoading();

    fetch(`http://localhost:8080/Administrator/${name}/${password}`)
        // 1. Trying the request to Back-End; 
        .then(response => {
            if (!response.ok) {
                throw new Error('Request Error!');
            }
            return response.json(); // Convert the response in json;
        })

        // 2. Response and logic of the front;
        .then(data => {
            if (data == null || data.name != name && data.password != password || data.name != name || data.password != password) {
                alertAdmNotFound();
                clear();
                hideSpinnerLoading();
            } else {
                alertSucessLogin();
                clear();
                hideSpinnerLoading();
            }
        })
        .catch(error => {
            console.error('Erro:', error);
            alertErrorLogin();
            hideSpinnerLoading();
            clear();
        });
    }
}

function clear() {
    document.getElementById('name').value = "";
    document.getElementById('password').value = "";
}

function login() {
    window.location.href = "../Register_Supplier/index.html";
}

window.replacePassword = replacePassword;
window.btnLogin = btnLogin;
window.login = login;