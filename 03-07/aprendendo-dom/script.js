 // Utilizando DOM, é possível manipular qualquer elemento HTML
// console.log(titulo);  retorna o elemento HTML
           
// const titulo = document.getElementById("titulo"); //chamando ID   

// titulo.innerHTML = "Enzo Assis"

let nome = document.getElementById("idNome");
function mudar(event) {
    // Previne o comportamento padrão do evento, com o envio do form
    event.preventDefault();

    document.getElementById("titulo").innerHTML = nome.value;
    nome.value = "";
}

let cidade = document.getElementById("idCidade");
function addCidade(event) {
    event.preventDefault();

    document.getElementById("titulo2").innerHTML = cidade.value;
    cidade.value = "";
}


