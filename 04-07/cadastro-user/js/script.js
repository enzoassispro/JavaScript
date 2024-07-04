let form = document.querySelector("#cadastroForm");
let cadastroList = document.querySelector("#cadastroList");
//Obtém os valores dos campos de entrada

let nome = document.querySelector("#nome");
let email = document.querySelector("#email");
let cidade = document.querySelector("#cidade");

//Adiciona um evento de formulário
//Submit
form.addEventListener("submit", function(event) {
    event.preventDefault(); //Impede o comportamento padrão do formulário

    console.log("nome.value")
    console.log("email.value")
    console.log("cidade")

    //cria um novo iterm de lista com valores
    let listItem = document.createElement("li");
    listItem.innerHTML = `<strong>Nome: </strong> ${nome.value} <br> <strong>Email: </strong> ${email.value}<br> <strong>Cidade: </strong> ${cidade.value}`

    //Adiciona o novo item na lista. adiciona um item html, no html, pelo script
    cadastroList.appendChild(listItem);

    //Limpa os campos de entrada
    form.reset();
});