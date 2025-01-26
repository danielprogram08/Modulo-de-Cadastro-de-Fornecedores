// Show the Spinner Loading to Register;
export function showSpinnerLoadingRegister() {
    let btnRegister = document.getElementById("btn-register");
    let titleBtn = document.getElementById("title-btn-register");
    let spinner = document.getElementById("spinner-register");

    btnRegister.disabled = true;
    titleBtn.textContent = "";
    spinner.classList.remove("d-none");
}

// Hide the Spinner Loading to Register;
export function hideSpinnerLoadingRegister() {
    let btnRegister = document.getElementById("btn-register");
    let titleBtn = document.getElementById("title-btn-register");
    let spinner = document.getElementById("spinner-register");

    btnRegister.disabled = false;
    titleBtn.textContent = "Cadastrar";
    spinner.classList.add("d-none");
}

// Show the Spinner Loading to Search;
export function showSpinnerLoadingSearch() {
    let btnRegister = document.getElementById("btn-search");
    let titleBtn = document.getElementById("title-btn-search");
    let spinner = document.getElementById("spinner-search");

    btnRegister.disabled = true;
    titleBtn.textContent = "";
    spinner.classList.remove("d-none");
}

// Hide the Spinner Loading to Search;
export function hideSpinnerLoadingSearch() {
    let btnRegister = document.getElementById("btn-search");
    let titleBtn = document.getElementById("title-btn-search");
    let spinner = document.getElementById("spinner-search");

    btnRegister.disabled = false;
    titleBtn.textContent = "Consultar";
    spinner.classList.add("d-none");
}