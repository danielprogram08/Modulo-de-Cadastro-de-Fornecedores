import { showSpinnerLoadingRegister, hideSpinnerLoadingRegister, showSpinnerLoadingSearch, hideSpinnerLoadingSearch } from "./Functions/Spinner_Loading/SpinnerScript.js";
import { alertEmptyFields, alertSucessRegister, alertErrorRegister } from "./Functions/Alerts/AlertsScript.js";
import { clearFields } from "./Functions/clearFields/clearFields.js";
import { MenuSupplier } from "./Search_Supplier/script.js";
import { MenuAllSupplier } from "./Search_Supplier/SearchAllSupplier/script.js";

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

        fetch(`http://localhost:8081/Supplier/Register`, {
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
                    throw new Error("Erro: " + Error);
                }
                reponse => reponse.json();
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

function search() {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const telephone = document.getElementById("telephone").value;
    const cnpjCpf = document.getElementById("CnpjCpf").value;
    const corporateReason = document.getElementById("CorporateReason").value;

    showSpinnerLoadingSearch();

    if (name == "" || email == "" || address == "" || telephone == "" || cnpjCpf == "" || corporateReason == "") {  
        hideSpinnerLoadingSearch();
        MenuAllSupplier();

    } else if (name != "" || email != "" || address != "" || telephone != "" || cnpjCpf != "" || corporateReason != "") {
        hideSpinnerLoadingSearch();
        MenuSupplier(name);
    }
}

window.search = search;
window.register = register;