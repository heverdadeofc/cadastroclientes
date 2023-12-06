var users = JSON.parse(localStorage.getItem('users')) || [];

function validateForm() {
    var nome = document.getElementById("nome").value;
    var tipoNegocio = document.getElementById("tipoNegocio").value;
    var telefone = document.getElementById("telefone").value;

    if (nome === "" || tipoNegocio === "" || telefone === "") {
        alert("Por favor, preencha todos os campos obrigatórios!");
        return false;
    }

    var userData = {
        nome: nome,
        tipoNegocio: tipoNegocio,
        faturamento: document.getElementById("faturamento").value,
        telefone: telefone
    };

    users.push(userData);
    updateUsersList();
    saveDataToLocalStorage();

    // Limpar os campos do formulário após o envio
    document.getElementById("registrationForm").reset();

    return false; // Impede o envio do formulário, pois já tratamos os dados
}

function updateUsersList() {
    var userListElement = document.getElementById("userList");
    userListElement.innerHTML = ""; // Limpa a lista antes de atualizar

    users.forEach(function(user) {
        var listItem = document.createElement("li");
        listItem.textContent = "Nome: " + user.nome + ", Tipo de Negócio: " + user.tipoNegocio + ", Telefone: " + user.telefone;
        userListElement.appendChild(listItem);
    });
}

function saveDataToLocalStorage() {
    localStorage.setItem('users', JSON.stringify(users));
}

// Inicializa a lista de usuários ao carregar a página
window.onload = function() {
    updateUsersList();
};
