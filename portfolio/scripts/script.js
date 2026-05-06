const botao = document.getElementById("modoClaroEscuro");

let claro = true; // começa escuro 

botao.addEventListener("click", () => {
    if (claro) {

        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        botao.textContent = "Modo claro";
    } else {

        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        botao.textContent = "Modo escuro";
    }

    claro = !claro;
});

const NOME = "Maria Dudinha";
let tituloProfissional = "Garota de programa";
let minhaBio = "Procuro um rumo nesse grande vale da estranheza." + 
        " Gosto do meu açúcar com um pouco de café.";
let anoFormatura = 2026;
let mesFormatura = 12; 
let diaFormatura = 31; 
let anoIngresso = 2025;
let mesIngresso = 1;
let diaIngresso = 1;

let hoje = new Date();
let mesAtual = hoje.getMonth() +1;// começa no mês 0
let anoAtual = hoje.getFullYear(); // ano atual 
let diaAtual = hoje.getDate(); // dia atual 

let indefinido;
let nulo = null; 
let curso = {
    nome: "Desenvolvimento de sistemas" , 
    ano: 2, 
    disciplinaAtual: "Desenvolvimento de aplicações"
}


console.log(typeof nulo);
console.log(typeof indefinido);
console.log(typeof anoFormatura);
console.log(typeof minhaBio);
console.log(typeof tituloProfissional);
console.log(typeof NOME);
console.log(typeof curso);

document.getElementById("meuNome").innerText = NOME; 
document.getElementById("tituloProfissional").innerText = tituloProfissional;
document.getElementById("minhaBio").innerText = minhaBio; 
document.getElementById("anoFormatura").innerText = "Ano de formatura: " + anoFormatura;
document.getElementById("anoIngresso").innerText = "Ano de ingresso: " + anoIngresso;

//Operadores aritméticos
document.getElementById("tempoRestanteParaFormatura").innerText = `Tempo restante para formatura: ${diaFormatura - diaIngresso} dia(s) | ${mesFormatura - mesIngresso} mês(es) | ${anoFormatura - anoIngresso} ano(s)`

//Função para mostrar o valor inserido 
function mostrar() {
      const valor = document.getElementById('nome').value;
      document.getElementById('resultado').textContent = 'Você digitou: ' + valor;};
            //document.getElementById('nome') — encontra o elemento HTML que tem id="nome" (o input)
            //.value — pega o texto que o usuário digitou dentro dele
            //const valor — armazena esse texto numa variável


function mostrar2() {
        const formatura = document.getElementById('formatura').value
        const ingresso = document.getElementById('ingresso').value
        document.getElementById('resultado2').textContent = 'Você digitou: ' + formatura + ' ' + 'e' + ' ' + ingresso;};


function calcular() {
    let inicio = new Date(document.getElementById("dataInicio").value);
    let fim = new Date(document.getElementById("dataFim").value);
 
    let anos = fim.getFullYear() - inicio.getFullYear();
    let meses = fim.getMonth() - inicio.getMonth();
    let dias = fim.getDate() - inicio.getDate();

    if (dias < 0) {
        meses--;
        let mesAnterior = new Date(fim.getFullYear(), fim.getMonth(), 0);
        dias += mesAnterior.getDate();
    }

    if (meses < 0) {
        anos--;
        meses += 12;
    }
 
    document.getElementById("tempoRestante").innerText = 
        `Tempo de curso para a formatura: ${dias} dia(s) | ${meses} mês(es) | ${anos} ano(s)`;
}