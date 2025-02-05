import { alertErrorSearch } from "../Functions/Alerts/AlertsScript.js";

export function MenuSupplier(name) {

    fetch(`http://localhost:8080/Supplier/SearchByName/${name}`)

    .then(response => response.json())

    .then(supplier => {
      if (supplier == null) {
        alertErrorSearch();
        console.log(supplier);
    } else {
      console.log(supplier);
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
        </section>
      `;
  
      body.innerHTML = table;
  
      let tbody = document.querySelector("#table-body");
      let rows = '';
  
      let bgColor = supplier.id % 2 === 0 ? 'background-color: rgb(29, 172, 255);' : '';
          
          rows += `
            <tr class="supplier-row">
              <td style="${bgColor}" id="data-supplier">${supplier.id}</td>
              <td style="${bgColor}" id="data-supplier">${supplier.name}</td>
              <td style="${bgColor}" id="data-supplier">${supplier.email}</td>
              <td style="${bgColor}" id="data-supplier">${supplier.address}</td>
              <td style="${bgColor}" id="data-supplier">${supplier.telephone}</td>
              <td style="${bgColor}" id="data-supplier">${supplier.cnpjCpf}</td>
              <td style="${bgColor}" id="data-supplier">${supplier.corporateReason}</td>
              <td><button id="Edit-Button">🖋️​ EDITAR</button></td>
              <td><button id="Delete-Button">❌​ DELETAR</button></td>
            </tr>`;
  
      tbody.innerHTML = rows;
          
      }
    })
  
    .catch(error => {
        console.log("Erro: " + error);
    });
  }