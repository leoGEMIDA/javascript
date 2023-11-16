// Estrutura de controle condicional

document.write('<h2 style="color: blue;">Condicional encadeada</h2><br>');

/* if/else, else if */
let nome = "Ignacio";

// Verificar idade da pessoa


// Condicional encadeada
let mensagem;
let idade = 70;


if (idade >= 18) {
    mensagem = ("Você é maior de idade!");

} else {
    mensagem = ("Você é menor de idade!");
}


console.log(mensagem);
document.write(`${mensagem}<br>`); 

document.write("__________________________________________________________________<br>");

// condicional aninhada
document.write('<h2 style="color: blue;">Condicional aninhada</h2><br>');

if (idade >=60) {
    mensagem ="É idoso.";
} else if (idade >=18) {
    mensagem ="É adulto, mas não é idoso.";
} else {
    // && (Operador E)
    if (idade >=12 && idade <18) {
        mensagem ="É adolescente.";
    } else {
        mensagem ="É baby.";
    }
}

document.write(`${nome}, ${mensagem} <br>`); // Mostra a tela (Navegador)

document.write("__________________________________________________________________<br>");

// condicional aninhada
document.write('<h2 style="color: blue;">Exercício notas, média e Aprovado e Reprovado</h2><br>');


/* Exercício notas, média e Aprovado e Reprovado */
var n1 = 5.7;
var n2 = 9;

media = (n1 + n2) /2;

// Modo tradicional
// if (media >=7) {
//     situacao = 'Aprovado!';
// } else {
//     situacao = 'Reprovado!';
// }

// Operador Ternário
situacao = media >=7 ? 'Aprovado!': 'Reprovado!';

document.write(`Média: ${media}<br> `)
document.write(`Status: ${situacao}<br>`); // Mostra a tela (Navegador)

document.write("__________________________________________________________________<br>");

// condicional aninhada
document.write('<h2 style="color: blue;">Switch Case</h2><br>');


/* switch/ case/ default/ break 
Opçôes do Chat Bot:
1 -> Informações
2 -> Reclamação
3 -> dúvidas
x -> opçao desconhecida, direcionar para um humano */

let opcao = 1;
let textoOpcao;

switch(opcao){
    case 1:
        textoOpcao = 'Legal, o que deseja saber?';
        break;
    case 2:
        textoOpcao = 'Que pena, o que aconteceu?';
        break;
    case 3:
        textoOpcao = 'Certo, qual a dúvida?';
        break;
    case 4:
        textoOpcao = 'Hum, não entendi... vou transferir.';
        break;
}

document.write(`Você escolheu a opção ${opcao} <br>`);
document.write(`${textoOpcao} <br>`);

document.write("__________________________________________________________________<br>");

// condicional aninhada
document.write('<h2 style="color: blue;">Operadores de comparação</h2><br>');

// Operadores de comparação


let a = 10;
let b = '10';


// == se é igual/ === estritamente igual (até tipo de dados)
document.write(a === b); // True ou false

