import { showSpinnerLoadingSearch, hideSpinnerLoadingSearch } from "../Functions/Spinner_Loading/SpinnerScript.js";
//import { alertErrorSearch } from "../Functions/Alerts/AlertsScript.js";

function search() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const telephone = document.getElementById("telephone").value;
    const cnpjCpf = document.getElementById("CnpjCpf").value;
    const corporateReason = document.getElementById("CorporateReason").value;

    showSpinnerLoadingSearch();

    if (name == "" || email == "" || address == "" || telephone == "" || cnpjCpf == "" || corporateReason == "") {
        window.location.href = "Search_Supplier/Sindex.html";
        hideSpinnerLoadingSearch();
    }
}

window.search = search;