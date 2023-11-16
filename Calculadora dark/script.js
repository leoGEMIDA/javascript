// Seleciona o elemento HTML com o id 'inputBox' e armazena-o na variável "input".
let input = document.getElementById('inputBox');

// Seleciona todos os elementos HTML do tipo 'button' e armazena-os em "buttons".
let buttons = document.querySelectorAll('button');

// Tnicializa uma string vazia para armazenar a entrada do usuário.
let string ="";

// converte a coleção de botões em um array para que possamos percorrer sobre eles.
let arr = Array.from(buttons);

// Percorre sobre cada botão no array 'arr'.
arr.forEach(button => {
        // Adiciona um ouvinte de eventos de clique a cada botão.
        button.addEventListener('click', (e) => {
        // Verifica se o texto dentro do botão clicado é "=".
        if (e.target.innerHTML == '=') {

            // à função eval() é uma função JavaScript que avalia e executa dinamicamente o código.Quando a linha é executada, o JavaScript interpreta o
            // conteúdo de string como uma expressão e a avalia. No exemplo dado, eval("2 +
            // 27) resultaria em 4, porque ele calcula à soma.
            string = eval(string);

            // Define o valor da caixa de entrada 'input' como a nova string calculada.
            input.value = string;
        }

        // Verifica se o texto dentro do botão clicado é 'AC' (Clear ALI).
        else if (e.target.innerHTML == 'AC') {
            // Linpa a string, redefinindo-a como uma string vazia.
            string = "";
            // Define o valor da caixa de entrada 'input' como uma string vazia.
            input.value = string;
        }
        // Verífica se o texto dentro do botão clicado é "DEL' (Delete).
        else if (e.target.innerHTHML == 'DEL') {
            // Remove o último caractere da string.
            string = string.substring(0, string.length - 1);
            // Define o valor da caixa de entrada 'input' como a nova string após a remoção.
            input.value = string;
        }
        // Se nenhum dos casos anteriores corresponder, significa que é um dígito ou operador.
        else {
            // Adiciona o texto do botão clicado à string de entrada.
            String += e.target. innertTHL;
            // Define o valor da caixa de entrada 'input' como a nova string de entrada.
            input.value = string;
        }
    })
})