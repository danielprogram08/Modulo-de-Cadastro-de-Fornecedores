function search() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const telephone = document.getElementById("telephone").value;
    const CnpjCpf = document.getElementById("CnpjCpf").value;
    const CorporateReason = document.getElementById("CorporateReason").value;
    const btnSearch = document.getElementById("btn-search");
    const titleBtn = document.getElementById("title-btn");
    const spinner = document.getElementById("spinner");

    btnSearch.disabled = true;
    titleBtn.textContent = "";
    spinner.classList.remove('d-none');

    if (name == "" || email == "" || address == "" || telephone == "" || CnpjCpf == "" || CorporateReason == "") {
        window.location.href = "Search_Supplier/index.html"
    } /*else if (name != "" || email != "" || address != "" || telephone != "" || CnpjCpf != "" || CorporateReason != "") {
    }*/
}

function register() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const telephone = document.getElementById("telephone").value;
    const CnpjCpf = document.getElementById("CnpjCpf").value;
    const CorporateReason = document.getElementById("CorporateReason").value;

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
        setTimeout(reload, 2000);
    } else {
        fetch(`http://localhost:8080/Register/${name}/${email}/${address}/${telephone}/${CnpjCpf}/${CorporateReason}`)

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
                setTimeout(reload, 2000);
            })

            .catch(error => {
                console.log("Erro: " + error);
                let alert = document.createElement("div");
                let container = document.querySelector(".container");

                alert.innerHTML =
                `<div style="position: fixed; top: 0; width: 100%; text-align: center;" class="alert alert-danger" role="alert">
                    𝐄𝐫𝐫𝐨 𝐚𝐨 𝐂𝐚𝐝𝐚𝐬𝐭𝐫𝐚𝐫 𝐅𝐨𝐫𝐧𝐞𝐜𝐞𝐝𝐨𝐫!
                </div>`
                container.style.marginTop = "40px";
                document.body.appendChild(alert);
                document.body.insertBefore(alert, document.body.firstChild);
                setTimeout(reload, 2000);
            });
    }
}

function reload() {
    window.location.reload();
}