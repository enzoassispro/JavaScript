const functions = [
    function (){return 'Plymouth'},
    function (){return 'é'}, 
    function (){return 'uma'}, 
    function (){return 'cidade'},
    function (){return 'fantasma'},
    function (){return 'localizada'},
    function (){return 'na'},
    function (){return 'ilha'},
    function (){return 'de'},
    function (){return 'Montserrat,'},
    function (){return 'um'},
    function (){return 'território'},
    function (){return 'ultramarino'},
    function (){return 'de'},
    function (){return 'Reino'},
    function (){return 'Unido'},
    function (){return 'localizado'},
    function (){return 'na'},
    function (){return 'cadeia'},
    function (){return 'de'},
    function (){return 'ilhas'},
    function (){return 'de'},
    function (){return 'Sotavento'},
    function (){return 'nas'},
    function (){return 'Pequenas'},
    function (){return 'Antilhas'},
    function (){return 'Índias'},
    function (){return 'Ocidentais.'},   
];

let frase = '';

for(let i = 0; i < functions.length; i++) {
    frase += `${functions[i]()}`;
}
    console.log(frase);