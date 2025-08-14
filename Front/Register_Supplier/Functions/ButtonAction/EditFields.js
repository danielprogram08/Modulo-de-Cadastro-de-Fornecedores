import { alertEmptyFields, alertErrorRegister, alertSucessRegister } from "../Alerts/AlertsScript.js";

function EditFields(id) {
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
                <td id="supplier-id">${id}</td>
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
        if (event.key == "Enter") {
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

            RequestEdit(id, newName, newEmail, newAddress, newTelephone, newCnpjCpf, newCorporateReason);

          }
    });
}

export { EditFields };

async function RequestEdit(id, name, email, address, telephone, cnpjCpf, corporateReason) {

  try {
    const response = await fetch(`http://localhost:8080/Supplier/Edit`, {
      method: 'PUT',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          id: id,
          name: name,
          email: email,
          address: address,
          telephone: telephone,
          cnpjCpf: cnpjCpf,
          corporateReason: corporateReason
      })
  })

  if (!response.ok) { alertErrorRegister(); console.log('Erro ao editar fornecedor! ' + response.status); }

  alertSucessRegister();
  reload();  

  } catch (error) {
    alertErrorRegister();
    console.log('Erro ao tentar editar fornecedor! ' + error);
  }
  
}

function reload() {
    setTimeout(() => {
        window.location.reload();
    }, 5000);
}
