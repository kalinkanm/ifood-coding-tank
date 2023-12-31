// Desafio: Conversor de Horários
// Ao efetuar a compra de sua refeição no Ifood o sistema, após confirmação do pagamento, 
//envia seu pedido ao restaurante, que ao aceitá-lo registra esse momento e 
//lhe retorna o horário de previsão da sua entrega. Esse recurso, 
//apesar de interessante começou a gerar uma quantidade significativa de reclamações na 
//Central de Atendimento, pois os clientes ficaram um pouco confusos com os horários indicados 
//para a entrega. Ao investigar o problema, o time de desenvolvimento entendeu que 
//os horários apresentados estavam no formato de 12hs (AM/PM), sendo que o correto seria utilizar 
//o formato de 24hs. Sua missão: criar um algoritmo capaz de fazer essa conversão! 
//Para isso, crie uma função que receba um horário qualquer, respeitando o formato 12hs (06:15:25PM) 
//e retorne o equivalente (18:15:25).

const horario = '06:15:25PM';
//const horario = prompt('Informe o horário: ');

function converterHorario(horario) {
    const indicador = horario[8] + horario[9];
    const hora = horario[0] + horario[1];
    const minutos = horario[3] + horario[4];
    const segundos = horario[6] + horario[7];

    if(indicador === 'PM') {
        return `${Number(hora) + 12}:${minutos}:${segundos}`
    }
    
    return `${hora}:${minutos}:${segundos}`
}

console.log(converterHorario(horario));