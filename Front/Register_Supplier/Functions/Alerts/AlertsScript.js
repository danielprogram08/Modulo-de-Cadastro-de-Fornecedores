// Alert error Register;
export function alertErrorRegister() {
    let alert = document.createElement("div");
    let container = document.querySelector(".container");

    alert.className = "alert alert-danger";
    alert.role = "alert";
    alert.style.cssText = `
        position: fixed;
        top: 0;
        width: 100%;
        text-align: center;
    `;
    alert.innerHTML =
        `𝗘𝗿𝗿𝗼 𝗮𝗼 𝗰𝗮𝗱𝗮𝘀𝘁𝗿𝗮𝗿 𝗳𝗼𝗿𝗻𝗲𝗰𝗲𝗱𝗼𝗿!<br>
        Verifique se este fornecedor já foi cadastrado.`
    container.style.marginTop = "90px";
    document.body.insertBefore(alert, document.body.firstChild);

    setTimeout(() => {
        alert.remove();
        container.style.marginTop = "0";
    }, 3000);
}

// Alert of Sucess`s Register;
export function alertSucessRegister() {
    let alertSucess = document.createElement("div");
    let container = document.querySelector(".container");

    alertSucess.className = "alert alert-sucess";
    alertSucess.role = "alert";
    alertSucess.style.cssText = `
        position: fixed;
        top: 0;
        width: 100%;
        text-align: center;
    `;
    alertSucess.innerHTML =
        `𝗙𝗼𝗿𝗻𝗲𝗰𝗲𝗱𝗼𝗿 𝗰𝗮𝗱𝗮𝘀𝘁𝗿𝗮𝗱𝗼 𝗰𝗼𝗺 𝘀𝘂𝗰𝗲𝘀𝘀𝗼!`
    container.style.marginTop = "40px";
    document.body.insertBefore(alert, document.body.firstChild);

    setTimeout(() => {
        alertSucess.remove();
        container.style.marginTop = "0";
    }, 3000);
}

// Alert to Empty Fields;
export function alertEmptyFields() {
    let alert = document.createElement("div");
    let container = document.querySelector(".container");

    alert.className = "alert alert-danger";
    alert.role = "alert";
    alert.style.cssText = `
        position: fixed;
        top: 0;
        width: 100%;
        text-align: center;
    `;
    alert.innerHTML =
        `𝗣𝗿𝗲𝗲𝗻𝗰𝗵𝗮 𝘁𝗼𝗱𝗼𝘀 𝗼𝘀 𝗰𝗮𝗺𝗽𝗼𝘀!`
    container.style.marginTop = "40px";
    document.body.insertBefore(alert, document.body.firstChild);

    setTimeout(() => {
        alert.remove();
        container.style.marginTop = "0";
    }, 3000);
}

export function alertErrorSearch() {
    let alert = document.createElement("div");
    let container = document.querySelector(".container");

    alert.className = "alert alert-danger";
    alert.role = "alert";
    alert.style.cssText = `
        position: fixed;
        top: 0;
        width: 100%;
        text-align: center;
    `;
    alert.innerHTML =
        `𝗘𝗿𝗿𝗼 𝗮𝗼 𝗰𝗼𝗻𝘀𝘂𝗹𝘁𝗮𝗿 𝗳𝗼𝗿𝗻𝗲𝗰𝗲𝗱𝗼𝗿!<br>
         Verifique se o fornecedor foi cadastrado!`
    container.style.marginTop = "90px";
    document.body.insertBefore(alert, document.body.firstChild);

    setTimeout(() => {
        alert.remove();
        container.style.marginTop = "0";
    }, 3000);
}