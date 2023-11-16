const pagina = document.querySelector("body");
const titulo = pagina.querySelector("h1");
const msg = pagina.querySelector("#mensagem");
const sub01 = pagina.querySelector("#subtitulo-exemplo01");

// addEventListener (Observador de eventos)
// Quando mouse sobre, mostra a frase

// Resolução exemplo 1 (Detecção de eventos)



// 1ª Digitação (Aqui)



// ____________________________________________________________________________
// Resolução exemplo 2 (Modo noturno)



// 2ª Digitação (Aqui)



// ____________________________________________________________________________
// Resolução exemplo 3 (Formulário de cadastro de alunos)

const formulario = pagina.querySelector('form');
const campoNome = formulario.querySelector('#nome');
const campoNota1 = formulario.querySelector('#nota1');
const campoNota2 = formulario.querySelector('#nota2');
const corpoTabela = pagina.querySelector('tbody');

formulario.addEventListener('submit', function(event) {
    // previne o comportamento padrão do formulário
    event.preventDefault();

    // Capturando os dados digitados
    // parseFloat => Transforma uma String em número (decimal)
    // parseInt => Transforma uma String em número (inteiro)

    let nome = campoNome.value;
    let nota1 = parseFloat(campoNota1.value);
    let nota2 = parseFloat(campoNota2.value);

    // Calcula a média
    let media = calculaMedia(nota1, nota2);

    // Verifica a situação
    let situacao = verificaSituacao(media);

    // Montagem do resumo do aluno
    montaResumo(nome, media, situacao);

    // Resetando o formulario
    formulario.reset();

    // Levando o foco para o campo nome
    campoNome.focus();

});




// 3ª Digitação (Aqui)




function montaResumo(nome, media, situacao) {
    // 1) Criar o elemento dinamicamente
    let linha = document.createElement('tr');

    // 2) Montar o conteudo do elemento criado
    linha.innerHTML = `<td> ${nome} </td>
                       <td> ${media} </td>
                       <td> ${situacao} </td> `;

    // 3) Adicionar o elemento ao DOM (corpoTabela)
    corpoTabela.appendChild(linha);

};

