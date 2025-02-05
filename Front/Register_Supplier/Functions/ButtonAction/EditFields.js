import { alertEmptyFields, alertErrorRegister, alertSucessRegister } from "../Alerts/AlertsScript.js";

export function EditFields() {
    let body = document.querySelector("body");

    let table = `
        <section class="main">
          <table class="table table-striped table-hover">
            <thead class="table-light">
              <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Endereço</th>
                <th>Telefone</th>
                <th>Cnpj / Cpf</th>
                <th>Razão Social</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody id="table-body">
              <tr class="supplier-row">
                <td></td>
                <td><input id="input-name" class="form-control"></td>
                <td><input id="input-email" class="form-control"></td>
                <td><input id="input-address" class="form-control"></td>
                <td><input id="input-telephone" class="form-control"></td>
                <td><input id="input-cnpjCpf" class="form-control"></td>
                <td><input id="input-corporateReason" class="form-control"></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </section>
      `;

    body.innerHTML = table;

    let tbody = document.querySelector("#table-body");

    tbody.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();

            let newName = document.getElementById("input-name").value;
            let newEmail = document.getElementById("input-email").value;
            let newAddress = document.getElementById("input-address").value;
            let newTelephone = document.getElementById("input-telephone").value;
            let newCnpjCpf = document.getElementById("input-cnpjCpf").value;
            let newCorporateReason = document.getElementById("input-corporateReason").value;

            if (!newName || !newEmail || !newAddress || !newTelephone || !newCnpjCpf || !newCorporateReason) {
                alertEmptyFields();
                return;
            }

            fetch(`http://localhost:8080/Supplier/Edit`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    newName: newName,
                    newEmail: newEmail,
                    newAddress: newAddress,
                    newTelephone: newTelephone,
                    newCnpjCpf: newCnpjCpf,
                    newCorporateReason: newCorporateReason
                })
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Erro ao atualizar fornecedor");
                }
                //alertSucessRegister();
                //reload();
            })
            .catch(() => alertErrorRegister());
        }
    });
}

function reload() {
    setTimeout(() => {
        window.location.reload();
    }, 3000);
}
