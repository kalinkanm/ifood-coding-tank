// Desafio: Quantidade de Palavras
// Neste desafio, sua missão será encontrar a quantidade de palavras existentes na seguinte frase:
//"façaMercadoNoIfoodEntregamosTudoOQueVocêPrecisaNaPortaDaSuaCasa"
//Como você pode perceber, essa frase está no padrão camelCase, portanto cada nova palavra é 
//representada pela inicial em maiúscula. Crie uma função que receba uma string e retorne a 
//quantidade de palavras existentes!

const frase = 'façaMercadoNoIfoodEntregamosTudoOQueVocêPrecisaNaPortaDaSuaCasa';

function contarPalavras(frase) {
    let contadorDePalavras = 1;
    let i = 0;

    while(i < frase.length) {
        if(frase[i] === frase[i].toUpperCase()) {
            contadorDePalavras++;
        }
        i++
    }
    
    return contadorDePalavras;
}

console.log(contarPalavras(frase));
