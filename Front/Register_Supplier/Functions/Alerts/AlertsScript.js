// Alert error Register;
export function alertErrorRegister() {
    let alert = document.createElement("div");
    let container = document.querySelector(".container");

    alert.className = "alert alert-danger";
    alert.role = "alert";
    alert.style.cssText = `
        position: fixed;
        top: -50px;
        width: 100%;
        text-align: center;
        transition: top 0.5s ease-in, top 0.5s ease-out;
        
    `;
    alert.innerHTML =
        `𝗘𝗿𝗿𝗼 𝗮𝗼 𝗰𝗮𝗱𝗮𝘀𝘁𝗿𝗮𝗿 𝗳𝗼𝗿𝗻𝗲𝗰𝗲𝗱𝗼𝗿!<br>
        Verifique se este fornecedor já foi cadastrado.`

    document.body.insertBefore(alert, document.body.firstChild);

    setTimeout(() => {
        alert.style.top = "0";
        container.style.marginTop = "90px";
    }, 10);

    setTimeout(() => {
        alert.style.top = "-50px";
        setTimeout(() => {
            alert.remove();
            container.style.marginTop = "0";
        }, 500);
    }, 3000);
}

// Alert of Sucess`s Register;
export function alertSucessRegister() {
    let alertSucess = document.createElement("div");
    let container = document.querySelector(".container");

    alertSucess.className = "alert alert-success";
    alertSucess.role = "alert";
    alertSucess.style.cssText = `
        position: fixed;
        top: -50px;
        width: 100%;
        text-align: center;
        transition: top 0.5s ease-in, top 0.5s ease-out;
    `;
    alertSucess.innerHTML =
        `𝗙𝗼𝗿𝗻𝗲𝗰𝗲𝗱𝗼𝗿 𝗰𝗮𝗱𝗮𝘀𝘁𝗿𝗮𝗱𝗼 𝗰𝗼𝗺 𝘀𝘂𝗰𝗲𝘀𝘀𝗼!`
    
    document.body.insertBefore(alertSucess, document.body.firstChild);

    setTimeout(() => {
        alertSucess.style.top = "0";
        container.style.marginTop = "40px";
    }, 10);

    setTimeout(() => {
        alertSucess.style.top = "-50px";
        setTimeout(() => {
            alertSucess.remove();
            container.style.marginTop = "0";
        }, 500);
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
        top: -50px;
        width: 100%;
        text-align: center;
        transition: top 0.5s ease-in, top 0.5s ease-out;
    `;
    alert.innerHTML =
        `𝗣𝗿𝗲𝗲𝗻𝗰𝗵𝗮 𝘁𝗼𝗱𝗼𝘀 𝗼𝘀 𝗰𝗮𝗺𝗽𝗼𝘀!`

    document.body.insertBefore(alert, document.body.firstChild);

    setTimeout(() => {
        alert.style.top = "0";
        container.style.marginTop = "40px";
    }, 10);

    setTimeout(() => {
        alert.style.top = "-50px";
        setTimeout(() => {
            alert.remove();
            container.style.marginTop = "0";
        }, 500);
    }, 3000);
}

export function alertErrorSearch() {
    let alert = document.createElement("div");
    let container = document.querySelector(".container");

    alert.className = "alert alert-danger";
    alert.role = "alert";
    alert.style.cssText = `
        position: fixed;
        top: -50px;
        width: 100%;
        text-align: center;
        transition: top 0.5s ease-in, top 0.5s ease-out;
    `;
    alert.innerHTML =
        `𝗘𝗿𝗿𝗼 𝗮𝗼 𝗰𝗼𝗻𝘀𝘂𝗹𝘁𝗮𝗿 𝗳𝗼𝗿𝗻𝗲𝗰𝗲𝗱𝗼𝗿!<br>
         Verifique se o fornecedor foi cadastrado!`

    document.body.insertBefore(alert, document.body.firstChild);

    setTimeout(() => {
        alert.style.top = "0";
        container.style.marginTop = "90px";
    }, 10);

    setTimeout(() => {
        alert.style.top = "-50px";
        setTimeout(() => {
            alert.remove();
            container.style.marginTop = "0";
        }, 500);
    }, 3000);
}