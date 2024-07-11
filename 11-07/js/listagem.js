const listaValores = document.querySelector("#listaValores");

//Carregar valores ao iniciar a página 
carregarValoresSalvos();

//Função para carregar valores na lista
function carregarValoresSalvos(){
    listaValores.innerHTML = ""; //limpa lista antes de adicionar valores

    for(let i = 0; i < localStorage.length; i++){
        const chave = localStorage.key(i);

        if(chave.startsWith('valorSalvo')){// filtra as chaves
            const valor = localStorage.getItem(chave); 
            const listItem = document.createElement("li");
            listItem.textContent = valor;
            listaValores.appendChild(listItem);
        }
}};