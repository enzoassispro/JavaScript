let txt = "Estão chegando as provas";

console.log(txt.length);

//retorna a primeira posicao na string
console.log(txt.indexOf("as"));
//ultima posicao na string
console.log(txt.lastIndexOf("as"));
// ele separa do 0 ate o 5
console.log(txt.slice(0, 5));
// ele altera as variaveis
console.log(txt.replace("provas", "avaliacoes"));
// deixa em maiusculo
console.log(txt.toUpperCase());
//deixa em minusculo
console.log(txt.toLowerCase());