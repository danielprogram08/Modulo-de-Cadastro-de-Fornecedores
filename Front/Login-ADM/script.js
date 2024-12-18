function login() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Show the loading spinner;
    document.getElementById('spinner').classList.remove('d-none');
    document.getElementById('btn-login').disabled = true;

    if (name == "" && email == "" && password == "" || name == "" || email == "" || password == "") {
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
        console.log(name + "\n" + email + "\n" + password);
        clear();
        // Hide the loading spinner;
        setTimeout(function () {
            document.getElementById('spinner').classList.add('d-none');
            document.getElementById('btn-login').disabled = false;
        }, 2000); // Time in miliseconds to hide the loading spinner;
    }

    /*fetch('http://localhost:8080/Admins/{id}')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na requisição');
            }
            return response.json(); // Convert the response in json;
        })

        .then(data => console.log(data))
        .catch(error => console.error('Erro:', error));*/
}

function clear() {
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('password').value = "";
}