function search() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const telephone = document.getElementById("telephone").value;
    const cnpjCpf = document.getElementById("CnpjCpf").value;
    const corporateReason = document.getElementById("CorporateReason").value;
    const btnSearch = document.getElementById("btn-search");
    const titleBtn = document.getElementById("title-btn-search");
    const spinner = document.getElementById("spinner-search");

    btnSearch.disabled = true;
    titleBtn.textContent = "";
    spinner.classList.remove('d-none');

    if (name == "" || email == "" || address == "" || telephone == "" || cnpjCpf == "" || corporateReason == "") {
        window.location.href = "Search_Supplier/index.html"
    } else if (name != "" || email != "" || address != "" || telephone != "" || cnpjCpf != "" || corporateReason != "") {
        fetch(`http://localhost:8080/Search/${name},${email},${address},${telephone},${cnpjCpf},${corporateReason}`)

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
    const cnpjCpf = document.getElementById("CnpjCpf").value;
    const corporateReason = document.getElementById("CorporateReason").value;
    const btnRegister = document.getElementById("btn-register");
    const titleBtn = document.getElementById("title-btn-register");
    const spinner = document.getElementById("spinner-register");

    btnRegister.disabled = true;
    titleBtn.textContent = "";
    spinner.classList.remove("d-none");

    if (name == "" || email == "" || address == "" || telephone == "" || cnpjCpf == "" || corporateReason == "") {
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
        fetch(`http://localhost:8080/Supplier/Register`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify ({
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
                    𝗘𝗿𝗿𝗼 𝗮𝗼 𝗰𝗮𝗱𝗮𝘀𝘁𝗿𝗮𝗿 𝗳𝗼𝗿𝗻𝗲𝗰𝗲𝗱𝗼𝗿!<br>
                    Verifique se este fornecedor já foi cadastrado.
                </div>`
                container.style.marginTop = "90px";
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