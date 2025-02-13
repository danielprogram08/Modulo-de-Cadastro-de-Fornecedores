import { alertErrorSearch } from "../Functions/Alerts/AlertsScript.js";
import { EditFields } from "../Functions/ButtonAction/EditFields.js";
import { DeleteSupplier } from "../Functions/ButtonAction/DeleteSupplier.js";

export function MenuSupplier(name) {

    fetch(`http://localhost:8081/Supplier/SearchByName/${name}`)

    .then(response => response.json())

    .then(supplier => {
      if (supplier == null) {

        alertErrorSearch();
        
    } else {

      let id = supplier.id;
      let name = supplier.name;
      let email = supplier.email;
      let address = supplier.address;
      let telephone = supplier.telephone;
      let cnpjCpf = supplier.cnpjCpf;
      let corporateReason = supplier.corporateReason;

      let body = document.querySelector("body");
      body.innerHTML = '';
  
      let table = `
        <section class="main">
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
                <th id="Head-Table"></th>
                <th id="Head-Table"></th>
              </tr>
            </thead>
            <tbody id="table-body"></tbody>
          </table>
          <button style="font-weight: bold;" onclick="Return()" class="btn btn-primary">↩︎</button>
        </section>
      `;
  
      body.innerHTML = table;
  
      let tbody = document.querySelector("#table-body");
      let rows = '';
  
      let bgColor = id % 2 == 1 ? 'background-color: rgb(29, 172, 255); color: white' : '';
          
          rows += `
            <tr class="supplier-row">
              <td style="${bgColor}; font-weight: bold;" id="supplier-id">${id}</td>
              <td style="${bgColor}; font-weight: bold;" id="supplier-name">${name}</td>
              <td style="${bgColor}; font-weight: bold;" id="supplier-email">${email}</td>
              <td style="${bgColor}; font-weight: bold;" id="supplier-address">${address}</td>
              <td style="${bgColor}; font-weight: bold;" id="supplier-telephone">${telephone}</td>
              <td style="${bgColor}; font-weight: bold;" id="supplier-cnpjCpf">${cnpjCpf}</td>
              <td style="${bgColor}; font-weight: bold;" id="supplier-corporateReason">${corporateReason}</td>
              <td style="${bgColor}; font-weight: bold;" ><button class="btn btn-light" id="Edit-Button" onclick="EditFields(${id})">🖋️​ EDITAR</button></td>
              <td style="${bgColor}; font-weight: bold;" ><button class="btn btn-danger" id="Delete-Button" onclick="DeleteSupplier(${id})">❌​ DELETAR</button></td>
            </tr>`;
  
      tbody.innerHTML = rows;
          
      }
    })
  
    .catch(error => {
        console.log("Erro: " + error);
    });
  }

  function Return() {
    window.location.reload();
  }

  window.EditFields = EditFields;
  window.Return = Return;
  window.AlertDeleteSupplier = DeleteSupplier;