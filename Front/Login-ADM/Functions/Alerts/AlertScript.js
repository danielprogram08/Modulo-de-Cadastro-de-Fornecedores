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

export function alertSucessLogin() {
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
        `✔️ 𝗕𝗲𝗺-𝗩𝗶𝗻𝗱𝗼!`
    
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

export function alertAdmNotFound() {
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
        `𝗔𝗱𝗺𝗶𝗻𝗶𝘀𝘁𝗿𝗮𝗱𝗼𝗿 𝗻ã𝗼 𝗲𝗻𝗰𝗼𝗻𝘁𝗿𝗮𝗱𝗼!`

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

export function alertErrorLogin() {
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
        `𝗘𝗿𝗿𝗼 𝗮𝗼 𝗳𝗮𝘇𝗲𝗿 𝗹𝗼𝗴𝗶𝗻!`

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