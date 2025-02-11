import { alertEmptyFields, alertAdmNotFound, alertSucessPassword, alertError } from "../Functions/Alerts/AlertScript.js";
import { showSpinnerLoading, hideSpinnerLoading, showSpinner, hideSpinner } from "../Functions/Spinner_Loading/SpinnerScript.js";

function save() {
    const nameAdm = document.getElementById("name").value;
    const newPassword = document.getElementById("password").value;

    showSpinner();

    if (nameAdm == "" && newPasswordpassword == "" || nameAdm == "" || newPassword == "") {
        hideSpinner();
        alertEmptyFields();
    } else {
        
        fetch(`http://localhost:8080/Administrator/${nameAdm}/${newPassword}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro na requisição');
                }
                return response.json();
            })

            .then(data => {
                if (data == false) {
                    hideSpinner();
                    clear();
                    alertAdmNotFound();
                } else {
                    hideSpinner();
                    clear();
                    alertSucessPassword();
                    reload();
                }
            })

            .catch(error => {
                console.error('Erro:', error);
                alertError();
                hideSpinner();
            });
    }
}

function clear() {
    document.getElementById('name').value = "";
    document.getElementById('password').value = "";
}

function reload() {
    setTimeout(() => {
        window.location.href = "../index.html";
    }, 5000);
}

window.save = save;
window.reload = reload;