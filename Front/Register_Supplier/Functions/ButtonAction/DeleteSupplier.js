import { alertSucessDelete } from "../Alerts/AlertsScript.js";

export function DeleteSupplier(id) {
    let alertDiv = document.createElement("div");
    alertDiv.className = "alert alert-danger";
    alertDiv.role = "alert";
    alertDiv.style.cssText = `
        position: fixed;
        top: -250px;
        width: 100%;
        text-align: center;
        transition: top 0.5s ease-in;
    `;
    alertDiv.innerHTML = `
        <h4 class="alert-heading">Alerta!</h4>
        <p>Você está prestes a deletar este fornecedor.</p>
        <hr>
        <p class="mb-0">Tem certeza que deseja deletar este fornecedor?</p>
        <div style="display: flex; justify-content: space-around; margin-top: 10px; font-weight: bold;">
            <button id="Confirm-Button" onclick="ConfirmAction(${id})" class="btn btn-primary">Sim</button>
            <button id="Cancel-Button" onclick="CancelAction()" class="btn btn-danger">Não</button>
        </div>
    `;

    document.body.appendChild(alertDiv);

    setTimeout(() => {
        alertDiv.style.top = "0px";
    }, 100);

    function ConfirmAction(id) {
        fetch(`http://localhost:8080/Supplier/DeleteById/${id}`, {
            method: 'DELETE',})
            .then(response => {
                if (!response.ok) {
                    throw new Error("Erro ao deletar fornecedor");
                }
                return response.text();
            })
            .then(alertDiv.remove(), alertSucessDelete(), ReloadPage())
            .catch(error => console.error("Erro: " + error));
    }

    function CancelAction() {
        alertDiv.remove();
    }

    function ReloadPage() {
        setTimeout(() => {
            window.location.reload();
        }, 5000);
    }

    window.ConfirmAction = ConfirmAction;
    window.CancelAction = CancelAction;
    window.ReloadPage = ReloadPage;
}