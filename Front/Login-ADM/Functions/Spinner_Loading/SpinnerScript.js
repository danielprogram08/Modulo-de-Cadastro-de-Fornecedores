// Show the loading spinner;
export function showSpinnerLoading() {
    let spinner = document.getElementById('spinner');
    let TitleBtn = document.getElementById('title-btn');
    let btnLogin = document.getElementById('btn-login');

    spinner.classList.remove('d-none');
    TitleBtn.textContent = '';
    btnLogin.disabled = true;
}

// Hide the loading spinner;
export function hideSpinnerLoading() {
    let spinner = document.getElementById('spinner');
    let TitleBtn = document.getElementById('title-btn');
    let btnLogin = document.getElementById('btn-login');

    spinner.classList.add('d-none');
    TitleBtn.textContent = 'login';
    btnLogin.disabled = false;
}