import { showSpinnerLoadingSearch, hideSpinnerLoadingSearch } from "../Functions/Spinner_Loading/SpinnerScript.js";
// import { alertErrorSearch } from "../Functions/Alerts/AlertsScript.js";
// import { clearFields } from "../Functions/clearFields/clearFields.js";

function search() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const telephone = document.getElementById("telephone").value;
    const cnpjCpf = document.getElementById("CnpjCpf").value;
    const corporateReason = document.getElementById("CorporateReason").value;

    showSpinnerLoadingSearch();

    if (name == "" || email == "" || address == "" || telephone == "" || cnpjCpf == "" || corporateReason == "") {
        
        hideSpinnerLoadingSearch();
    } /*else if (name != "" || email != "" || address != "" || telephone != "" || cnpjCpf != "" || corporateReason != "") {
        fetch(`http://localhost:8080/SearchSupplier`, {
            method: 'GET',
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

        .then(response => {
            if (!response.ok) {
                throw new Error("Request error!");
            }
            return response.json();
        })

        .then(data => {
            let body = document.querySelector("body");
            body.innerHTML = '';
        })
        .catch(error => {
            console.log("Erro: " + error);
            hideSpinnerLoadingSearch();
            alertErrorSearch();
            clearFields();
        });
    }*/
}

window.search = search;

/*<section class="main">
      <table class="table table-striped table-hover">
        <thead class="table-light">
          <tr>
            <th id="Head-Table">Id</th>
            <th id="Head-Table">Nome</th>
            <th id="Head-Table">Email</th>
            <th id="Head-Table">Endereço</th>
            <th id="Head-Table">Telefone</th>
            <th id="Head-Table">Cnpj / Cpf</th>
            <th id="Head-Table">Razão Social</th>
            <th id="Button"></th>
            <th id="Button"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th id="First-Supplier">1</th>
            <td id="First-Supplier">Daniel Silva de Sousa</td>
            <td id="First-Supplier">danieldanielsilva08@gmail.com</td>
            <td id="First-Supplier">Rua Diamante, 986</td>
            <td id="First-Supplier">(85) 99185-0320</td>
            <td id="First-Supplier">999.999.999-99</td>
            <td id="First-Supplier">Kumulus Tech</td>
            <td id="First-Supplier"><button id="Edit-Button">🖋️​ EDITAR</button></td>
            <td id="First-Supplier"><button id="Delete-Button">❌​ DELETAR</button></td>
          </tr>
          <tr id="teste">
            <th>2</th>
            <td id="Second-Supplier">Daniel Silva de Sousa</td>
            <td id="Second-Supplier">danieldanielsilva08@gmail.com</td>
            <td id="Second-Supplier">Rua Diamante, 986</td>
            <td id="Second-Supplier">(85) 99185-0320</td>
            <td id="Second-Supplier">999.999.999-99</td>
            <td id="Second-Supplier">Kumulus Tech</td>
            <td id="Second-Supplier"><button id="Edit2-Button">🖋️​ EDITAR</button></td>
            <td id="Second-Supplier"><button id="Delete2-Button">❌​ DELETAR</button></td>
          </tr>
          <tr>
            <th id="Third-Supplier">3</th>
            <td id="Third-Supplier">Daniel Silva de Sousa</td>
            <td id="Third-Supplier">danieldanielsilva08@gmail.com</td>
            <td id="Third-Supplier">Rua Diamante, 986</td>
            <td id="Third-Supplier">(85) 99185-0320</td>
            <td id="Third-Supplier">999.999.999-99</td>
            <td id="Third-Supplier">Kumulus Tech</td>
            <td id="Third-Supplier"><button id="Edit-Button">🖋️​ EDITAR</button></td>
            <td id="Third-Supplier"><button id="Delete-Button">❌​ DELETAR</button></td>
          </tr>
        </tbody>
      </table>
    </section>*/