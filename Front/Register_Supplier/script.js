import { showSpinnerLoadingRegister, hideSpinnerLoadingRegister, showSpinnerLoadingSearch, hideSpinnerLoadingSearch } from "./Functions/Spinner_Loading/SpinnerScript.js";
import { alertEmptyFields, alertSucessRegister, alertErrorRegister } from "./Functions/Alerts/AlertsScript.js";
import { clearFields } from "./Functions/clearFields/clearFields.js";
import { MenuSupplier } from "./Search_Supplier/script.js";
import { MenuAllSupplier } from "./Search_Supplier/SearchAllSupplier/script.js";

async function RequestPost() {

    const UrlPost = 'http://localhost:8080/Supplier/Register';
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const telephone = document.getElementById("telephone").value;
    const cnpjCpf = document.getElementById("CnpjCpf").value;
    const corporateReason = document.getElementById("CorporateReason").value;

    showSpinnerLoadingRegister();

    if (!name || !email || !address || !telephone || !cnpjCpf || !corporateReason) { alertEmptyFields(); hideSpinnerLoadingRegister(); return; } 

    try {
        
        const response = await fetch(UrlPost, {
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

        if (!response.ok) { throw new Error(`Erro ao cadastrar um Fornecedor! + ${response.status}`); }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error('Ocorreu um erro enquanto cadastrava um fornecedor! ' + error);
        alertErrorRegister();
        hideSpinnerLoadingRegister();
        clearFields();
    }
}

async function register() {
    const data = await RequestPost();
    if (data) {
        alertSucessRegister();
        hideSpinnerLoadingRegister();
        clearFields();
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

    if (!name || !email || !address || !telephone || !cnpjCpf || !corporateReason) {  
        hideSpinnerLoadingSearch();
        MenuAllSupplier();

    } else if (name != "" || email != "" || address != "" || telephone != "" || cnpjCpf != "" || corporateReason != "") {
        hideSpinnerLoadingSearch();
        MenuSupplier(name);
    }
}

window.search = search;
window.register = register;