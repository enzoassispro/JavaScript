// obtém o botão do DOM
const btnMoverImg = document.getElementById("btnMoverImg");
let imagem = document.getElementById("imagem");

//Variável para rastrear o estado atual da posição da iamgem
let isMoved = false;

//Adiciona um evento de clique ao botão
btnMoverImg.addEventListener('click', function(){
    if(isMoved){
        imagem.style.left = "0px"; //move a imagem para posição original
    } else{
        imagem.style.left = "500px"; //move a imagem para a direita 
    }
// alterna o estado da posição 
isMoved = !isMoved;




























//Se a imagem não estiver movida, mova-a
// if (!isMoved) {
//     imagem.style.position = "absolute";
//     imagem.style.left = "100px";
//     imagem.style.top = "100px";
//     isMoved = true;
//     } else {
//         //Se a imagem estiver movida, mova-a de volta para a posição original
//         imagem.style.position = "static";
//         imagem.style.left = "0px";
//         imagem.style.top = "0px";
//         isMoved = false;
//         }
});