/* Estruturas de controle de repetição

while (enquanto)
do/while (faca/enquanto)
for (para uma determinada quantidade de vezes) */

document.write('<h2 style="color: blue;">Loop While (Checa a condição e então executa)</h2><br>');

// Exemplo 1: while (Checa a condição e então executa)

let i = 1;
while (i <= 5) {
    document.write(`O valor de i é: <strong>${i}</strong><br>`);
    i++;
    // i = i + 1;
}



document.write(`_____________________________________________<br>`);

document.write('<h2 style="color: blue;">Loop Do/While (Ele executa pelo menos 1 vez e checa a condição para ver se continua)</h2><br>');

// Exemplo 2: do/while (Ele executa pelo menos 1 vez e checa a condição para ver se continua)

let j = 1;
do {
    document.write(`O valor de j é: <strong>${j}</strong><br>`);
   j++;
} while (j <=3);



// Exemplo 3: for
document.write(`_____________________________________________<br>`);

document.write('<h2 style="color: blue;">Loop For (Executa um bloco com base em uma condição específica)</h2><br>');

// for (inicialização; condição; incremento/decremento) 


for (let k = 1; k <=8 ; k++) {
    document.write(`O valor de k é: <strong>${k}</strong><br>`);
}


document.write(`_____________________________________________<br>`);

document.write('<h2 style="color: blue;">Loop For (Sobre os elementos de um array)</h2><br>');

// Exemplo 4: Loop iterando sobre os carros da marca Lamborghini
let carros = [
    "Lamborghini Aventador", "Lamborghini Huracán", "Lamborghini Urus", "Lamborghini Gallardo", "Lamborghini Veneno"
];

// Cache do tamanho array
let tamanho = carros.length;

for (let i = 0; i < tamanho; i++) {
    document.write(`O valor de carros[${i}] é: <strong>${carros[i]}</strong><br>`);
}


