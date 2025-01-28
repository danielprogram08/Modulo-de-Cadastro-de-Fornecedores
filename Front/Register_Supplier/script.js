import { showSpinnerLoadingRegister, hideSpinnerLoadingRegister } from "./Functions/Spinner_Loading/SpinnerScript.js";
import { alertEmptyFields, alertSucessRegister, alertErrorRegister } from "./Functions/Alerts/AlertsScript.js";
import { clearFields } from "./Functions/clearFields/clearFields.js";

function register() {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const telephone = document.getElementById("telephone").value;
    const cnpjCpf = document.getElementById("CnpjCpf").value;
    const corporateReason = document.getElementById("CorporateReason").value;

    showSpinnerLoadingRegister();

    if (name == "" || email == "" || address == "" || telephone == "" || cnpjCpf == "" || corporateReason == "") {

        alertEmptyFields();
        hideSpinnerLoadingRegister();

    } else {

        fetch(`http://localhost:8080/Supplier/Register`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                address: address,
                telephone: telephone,
                cnpjCpf: cnpjCpf,
                corporateReason: corporateReason
            })
        })
            .then(reponse => {
                if (!reponse.ok) {
                    throw new Error("Request Error!");
                }
                return reponse.json();
            })

            .then(data => {
                console.log(data);
                alertSucessRegister();
                hideSpinnerLoadingRegister();
                clearFields();
            })

            .catch(error => {
                console.log("Erro: " + error);
                alertErrorRegister();
                hideSpinnerLoadingRegister();
                clearFields();
            });
    }
}

window.register = register;