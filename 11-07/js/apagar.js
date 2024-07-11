const apagarBtn = document.querySelector("#apagar")

apagarBtn.addEventListener("click", () => {
    //Limpa todos os valores no localStorage
    localStorage.clear();

    //limpa lista de interface
    listaValores.innerHTML = "";
});