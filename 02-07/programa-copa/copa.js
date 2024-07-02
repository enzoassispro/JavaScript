

// variaveis
let anoCopa = 1930;
let anoLimtite = prompt("Qual é o ano limite");

const mostra = function(frase){
    document.write(frase + "<br>");
}

while (anoCopa <= anoLimtite) {
    mostra(anoCopa + "Tem copa!");
    //anoCopa = anoCopa + 4;
    anoCopa += 4;
} 

mostra("Ufa! Esses foram os anos de copa até" + anoLimtite)