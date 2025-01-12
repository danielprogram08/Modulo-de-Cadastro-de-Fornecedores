function save() {
    const nameAdm = document.getElementById("name").value;
    const newPassword = document.getElementById("password").value;
    const spinner = document.getElementById("spinner");
    const TitleBtn = document.getElementById("title-btn");
    const btnSave = document.getElementById("btn-actualize");

    spinner.classList.remove('d-none');
    TitleBtn.textContent = '';
    btnSave.disabled = true;

    if (nameAdm == "" && newPasswordpassword == "" || nameAdm == "" || newPassword == "") {
        let alert = document.createElement("div");
        let container = document.querySelector(".container");
        alert.innerHTML =
            `<div style="position: fixed; top: 0; widht: 100%; text-align: center;" class="alert alert-danger" role="alert">
                𝗣𝗿𝗲𝗲𝗻𝗰𝗵𝗮 𝘁𝗼𝗱𝗼𝘀 𝗼𝘀 𝗰𝗮𝗺𝗽𝗼𝘀!
            </div>`;
        container.style.marginTop = "20px";
        document.body.appendChild(alert);
        document.body.insertBefore(alert, document.body.firstChild);
        spinner.classList.add('d-none');
        TitleBtn.textContent = '';
        btnSave.disabled = false;
    } else {
        spinner.classList.remove('d-none');
        TitleBtn.textContent = '';
        btnSave.disabled = true;

        fetch(`http://localhost:8080/Administrator/${nameAdm}/${newPassword}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro na requisição');
                }
                return response.json();
            })

            .then(data => {
                if (data == false) {
                    let alertAdm = document.createElement("div");
                    let container = document.querySelector(".container");

                    alertAdm.innerHTML =
                        `<div style="position: fixed; top: 0; width: 100%; text-align: center;" class="alert alert-danger" role="alert">
                        𝗔𝗱𝗺𝗶𝗻𝗶𝘀𝘁𝗿𝗮𝗱𝗼𝗿 𝗻ã𝗼 𝗲𝗻𝗰𝗼𝗻𝘁𝗿𝗮𝗱𝗼!
                    </div>`;
                    container.style.marginTop = "20px";
                    document.body.appendChild(alertAdm);
                    document.body.insertBefore(alertAdm, document.body.firstChild);

                    // Hide the loading spinner;
                    spinner.classList.add('d-none');
                    TitleBtn.textContent = 'Atualizar';
                    btnSave.disabled = false;
                    clear();
                } else {
                    // Sucess message;
                    let alertSucess = document.createElement("div");
                    let container = document.querySelector(".container");
                    alertSucess.innerHTML =
                        `<div style="position: fixed; top: 0; width: 100%; text-align: center;" class="alert alert-success" role="alert">
                        𝐒𝐞𝐧𝐡𝐚 𝐚𝐭𝐮𝐚𝐥𝐢𝐳𝐚𝐝𝐚 𝐜𝐨𝐦 𝐬𝐮𝐜𝐞𝐬𝐬𝐨! ✔️
                    </div>`
                    container.style.marginTop = "20px";
                    document.body.appendChild(alertSucess);
                    document.body.insertBefore(alertSucess, document.body.firstChild);

                    setTimeout(redirection, 2000); //set time to redirection the page;
                    clear();

                    spinner.classList.add('d-none');
                    TitleBtn.textContent = 'atualizar';
                    btnSave.disabled = false;
                }
            })

            .catch(error => {
                console.error('Erro:', error);

                let alert = document.createElement("div");
                let container = document.querySelector(".container");
                alert.innerHTML =
                    `<div style="position: fixed; top: 0; width: 100%; text-align: center;" class="alert alert-danger" role="alert">
                        𝗘𝗿𝗿𝗼!
                    </div>`;
                container.style.marginTop = "20px";
                document.body.appendChild(alert);
                document.body.insertBefore(alert, document.body.firstChild)

                spinner.classList.add('d-none');
                TitleBtn.textContent = 'login';
                btnSave.disabled = false;
            });
    }
}

function clear() {
    document.getElementById('name').value = "";
    document.getElementById('password').value = "";
}

function redirection() {
    window.location.href = "../index.html";
}