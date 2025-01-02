function login() {
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;

    // Show the loading spinner;
    document.getElementById('spinner').classList.remove('d-none');
    document.getElementById('btn-login').disabled = true;

    if (name == "" && password == "" || name == "" || password == "") {
        let alert = document.createElement("div");
        let container = document.querySelector(".container");
        alert.innerHTML =
            `<div style="position: fixed; top: 0; width: 100%; text-align: center;" class="alert alert-danger" role="alert">
                Preencha todos os campos!
            </div>`;
        container.style.marginTop = "20px"; // add margin above of the container;
        document.body.appendChild(alert);
        document.body.insertBefore(alert, document.body.firstChild) // add the alert in first position;
        // Hide the loading spinner;
        document.getElementById('spinner').classList.add('d-none');
        document.getElementById('btn-login').disabled = false;

    } else {
        // Show the loading spinner;
        document.getElementById('spinner').classList.remove('d-none');
        document.getElementById('btn-login').disabled = true;

        fetch(`http://localhost:8080/Administrator/${name}/${password}`)
        // 1. Trying the request to Back-End; 
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro na requisição');
                }
                return response.json(); // Convert the response in json;
            })
            
        // 2. Response and logic of the front;
            .then(data => {
                if (data == null) {
                    let alertAdm = document.createElement("div");
                    let container = document.querySelector(".container");

                    alertAdm.innerHTML = 
                    `<div style="position: fixed; top: 0; width: 100%; text-align: center;" class="alert alert-danger" role="alert">
                        Administrador não encontrado!
                    </div>`;
                    container.style.marginTop = "20px";
                    document.body.appendChild(alertAdm);
                    document.body.insertBefore(alertAdm, document.body.firstChild);
                }
                console.log(data);
                let alertSucess = document.createElement("div");
                let container = document.querySelector(".container");
                alertSucess.innerHTML = 
                    `<div style="position: fixed; top: 0; width: 100%; text-align: center;" class="alert alert-success" role="alert">
                        Bem-Vindo!
                    </div>`
                container.style.marginTop = "20px";
                document.body.appendChild(alertSucess);
                document.body.insertBefore(alertSucess, document.body.firstChild);

                clear();
                // Hide the loading spinner;
                document.getElementById('spinner').classList.add('d-none');
                document.getElementById('btn-login').disabled = false;
            })
            .catch(error => {
                console.error('Erro:', error);
                // Show error message;
                let alert = document.createElement("div");
                let container = document.querySelector(".container");
                alert.innerHTML =
                    `<div style="position: fixed; top: 0; width: 100%; text-align: center;" class="alert alert-danger" role="alert">
                        Erro ao fazer login!
                    </div>`;
                container.style.marginTop = "20px"; // add margin above of the container;
                document.body.appendChild(alert);
                document.body.insertBefore(alert, document.body.firstChild) // add the alert in first position;
                // Hide the loading spinner;
                document.getElementById('spinner').classList.add('d-none');
                document.getElementById('btn-login').disabled = false;
            });
    }
}

function clear() {
    document.getElementById('name').value = "";
    document.getElementById('password').value = "";
}