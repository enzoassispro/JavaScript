const drinkType = 'refrigerante';

switch(drinkType) {
    case "agua":
        console.log("Substância química cujas moléculas são formadas pro dois átomos de hidrogênio e um de oxigênio.");
        break;

    case "refrigerante":
        console.log("Bebida não alcoólica e não fermentada, fabricada industrialmente, à base de água mineral e açúcar. ");
        break;

    case "suco": 
        console.log("Bebida produzida do líquido extraído de frutos. ");
        break;

    default:
        console.log("Bebida desconhecida.");
        break;
}