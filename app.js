alert('Boas vindas ao Jogo do Número Secreto!');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random()* numeroMaximo + 1);
console.log(numeroSecreto);
let nomeUsuario = prompt('Coloque seu nome: ');
let chute;
let tentativas = 1;

// Enquanto chute não for igual ao número secreto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}: `);
    
//Se chute for igual ao número secreto
    if (chute == numeroSecreto ) {
        break;
    }  else {
        if (chute > numeroSecreto) {
                alert(`${nomeUsuario}, o número secreto é menor que: ${chute}`);
        } else {
                alert(`${nomeUsuario}, o número secreto é maior que: ${chute}`);
        } 
        tentativas++; 
    }     
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí, ${nomeUsuario}! Você descobriu o número secreto: (${numeroSecreto}). Usou ${tentativas} ${palavraTentativa} para conseguir.`);


// if (tentativas > 1) {
//     alert(`Isso aí, ${nomeUsuario}! Você descobriu o número secreto: (${numeroSecreto}). Usou ${tentativas} tentativas para conseguir.`);
// } else { 
//     alert(`Isso aí, ${nomeUsuario}! Você descobriu o número secreto: (${numeroSecreto}). Usou ${tentativas} tentativa para conseguir.`);
// }
