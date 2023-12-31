// Desafio: Número Solitário
// Neste desafio, seu objetivo é encontrar o(s) número(s) solitário(s) (que não se repete), 
//a partir do array de números fornecido. Para resolver, crie uma função que recebe um array 
//com os seguintes números:
//[12, 17, 15, 19, 22, 17, 19, 12]
//E retorne os que não estiverem repetidos.

const numeros = [12, 17, 15, 19, 22, 17, 19, 12];

function naoRepetidos(arr) {
    let unicos = [];
    for (let i = 0; i < arr.length; i++) {
        let elemento = arr[i];

        if (arr.indexOf(elemento) === arr.lastIndexOf(elemento)) {
            unicos.push(elemento)
        }
    }

    return unicos;
}

console.log(naoRepetidos(numeros));