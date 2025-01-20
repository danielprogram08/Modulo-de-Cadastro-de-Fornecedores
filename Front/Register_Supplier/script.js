function search() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const telephone = document.getElementById("telephone").value;
    const CnpjCpf = document.getElementById("CnpjCpf").value;
    const CorporateReason = document.getElementById("CorporateReason").value;
    const btnSearch = document.getElementById("btn-search");
    const titleBtn = document.getElementById("title-btn-search");
    const spinner = document.getElementById("spinner");

    btnSearch.disabled = true;
    titleBtn.textContent = "";
    spinner.classList.remove('d-none');

    if (name == "" || email == "" || address == "" || telephone == "" || CnpjCpf == "" || CorporateReason == "") {
        window.location.href = "Search_Supplier/index.html"
    } else if (name != "" || email != "" || address != "" || telephone != "" || CnpjCpf != "" || CorporateReason != "") {
        fetch(`http://localhost:8080/Search/${name},${email},${address},${telephone},${CnpjCpf},${CorporateReason}`)

            .then(reponse => {
                if (!reponse.ok) {
                    throw new Error("Request Error");
                }
            })

            .then(data => {
                console.log(data);
                window.location.href = "Search_Supplier/index.html";
            })
            .catch(error => {
            console.error("Erro: " + error);
            let alert = document.createElement("div");
            let container = document.querySelector(".container");

            alert.innerHTML =
            `<div style="position: fixed; top: 0; width: 100%; text-align: center;" class="alert alert-danger" role="alert">
                𝗘𝗿𝗿𝗼 𝗮𝗼 𝗰𝗼𝗻𝘀𝘂𝗹𝘁𝗮𝗿 𝗳𝗼𝗿𝗻𝗲𝗰𝗲𝗱𝗼𝗿!
            </div>`
            container.style.marginTop = "40px";
            document.body.appendChild(alert);
            document.body.insertBefore(alert, document.body.firstChild);

            btnSearch.disabled = false;
            titleBtn.textContent = "Consultar";
            spinner.classList.add("d-none");

            setTimeout(reload, 2000);
        })
    }
}

function register() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const telephone = document.getElementById("telephone").value;
    const CnpjCpf = document.getElementById("CnpjCpf").value;
    const CorporateReason = document.getElementById("CorporateReason").value;
    const btnRegister = document.getElementById("btn-register");
    const titleBtn = document.getElementById("title-btn-register");
    const spinner = document.getElementById("spinner");

    btnRegister.disabled = true;
    titleBtn.textContent = "";
    spinner.classList.remove("d-none");

    if (name == "" || email == "" || address == "" || telephone == "" || CnpjCpf == "" || CorporateReason == "") {
        let alert = document.createElement("div");
        let container = document.querySelector(".container");

        alert.innerHTML =
            `<div style="position: fixed; top: 0; width: 100%; text-align: center;" class="alert alert-danger" role="alert">
                𝗣𝗿𝗲𝗲𝗻𝗰𝗵𝗮 𝘁𝗼𝗱𝗼𝘀 𝗼𝘀 𝗰𝗮𝗺𝗽𝗼𝘀!
            </div>`
        container.style.marginTop = "40px";
        document.body.appendChild(alert);
        document.body.insertBefore(alert, document.body.firstChild);

        btnRegister.disabled = false;
        titleBtn.textContent = "Cadastrar";
        spinner.classList.add("d-none");
        setTimeout(reload, 2000);
    } else {
        btnRegister.disabled = true;
        titleBtn.textContent = "";
        spinner.classList.remove("d-none");

        fetch(`http://localhost:8080/Register/${name}/${email}/${address}/${telephone}/${CnpjCpf}/${CorporateReason}`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then(reponse => {
                if (!reponse.ok) {
                    throw new Error("Request Error!");
                }
                return reponse.json();
            })

            .then(data => {
                console.log(data);
                let alertSucess = document.createElement("div");
                let container = document.querySelector(".container");

                alertSucess.innerHTML =
                    `<div style="position: fixed; top: 0; width: 100%; text-align: center;" class="alert alert-success" role="alert">
                        𝗙𝗼𝗿𝗻𝗲𝗰𝗲𝗱𝗼𝗿 𝗰𝗮𝗱𝗮𝘀𝘁𝗿𝗮𝗱𝗼 𝗰𝗼𝗺 𝘀𝘂𝗰𝗲𝘀𝘀𝗼!
                    </div>`
                container.style.marginTop = "40px";
                document.body.appendChild(alertSucess);
                document.body.insertBefore(alertSucess, document.body.firstChild);

                btnRegister.disabled = false;
                titleBtn.textContent = "Cadastrar";
                spinner.classList.add("d-none");

                setTimeout(reload, 2000);
            })

            .catch(error => {
                console.log("Erro: " + error);
                let alert = document.createElement("div");
                let container = document.querySelector(".container");

                alert.innerHTML =
                    `<div style="position: fixed; top: 0; width: 100%; text-align: center;" class="alert alert-danger" role="alert">
                    𝗘𝗿𝗿𝗼 𝗮𝗼 𝗰𝗮𝗱𝗮𝘀𝘁𝗿𝗮𝗿 𝗳𝗼𝗿𝗻𝗲𝗰𝗲𝗱𝗼𝗿!
                </div>`
                container.style.marginTop = "40px";
                document.body.appendChild(alert);
                document.body.insertBefore(alert, document.body.firstChild);

                btnRegister.disabled = false;
                titleBtn.textContent = "Cadastrar";
                spinner.classList.add("d-none");

                setTimeout(reload, 2000);
            });
    }
}

function reload() {
    window.location.reload();
}