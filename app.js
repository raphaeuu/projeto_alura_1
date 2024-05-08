alert('Boas vindas ao Jogo do Número Secreto!');
let numeroSecreto = 29;
console.log(numeroSecreto)
let nomeUsuario = prompt('Coloque seu nome: ');
let chute = parseInt(prompt('Escolha um número entre 1 e 30'));

if (chute == numeroSecreto ) {
    alert(`Isso aí, ${nomeUsuario}! Você descobriu o número secreto: ${numeroSecreto}`);
}  else {
       if (chute > numeroSecreto) {
        alert(`${nomeUsuario}, o número secreto é menor que: ${chute}`);
       } else {
        alert(`${nomeUsuario}, o número secreto é maior que: ${chute}`);
       }
}