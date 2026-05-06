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
    //se anos para formatura for 0 ou menor que 0 não quero que imprima os anos 
    if (anos <= 0) {
        document.getElementById("tempoRestante").innerText = `Tempo de curso para a formatura: ${dias} dia(s) | ${meses} mês(es). Continue firme, você está na reta final.`;
    } else if (anos === 1) {
        document.getElementById("tempoRestante").innerText = 
        `Tempo de curso para a formatura: ${dias} dia(s) | ${meses} mês(es) | ${anos} ano(s)`;
    } else {
        document.getElementById("tempoRestante").innerText = 
        `Tempo de curso para a formatura: ${dias} dia(s) | ${meses} mês(es) | ${anos} ano(s)`;
    }

    //Essa parte deve ser resolvida 
    if (anos <= 0 && meses <=0 && dias <=0) {
    document.getElementById("tempoRestante").innerText = 
    `Tempo de curso para a formatura: Parabéns, você formou!`;
}

}

let nota = 8;
let aprovado = (nota >= 6)? "Aprovado" : "Reprovado"; 

document.write(`<p> Nota: ${nota} - ${aprovado} </p>`);

let diaEscrito;
//usar isso no portfolio  
let diaSemana = 4;
switch(diaSemana) {
    case 1: "Domingo"; break;
    case 2: "Segunda"; break;
    case 3: "Terça"; break;
    case 4: "Quarta"; break;
    case 5: "Quinta"; break; 
    case 6: "Sexta"; break;
    case 7: "Sábado"; break;
    default: "Dia inválido";
}

document.write(`<p>Hoje é: ${diaEscrito} </p>`);

// ─── QUIZ DE PERFIL ───────────────────────────────────────────
const btnVisual      = document.getElementById("btn-visual");
const btnLogica      = document.getElementById("btn-logica");
const resultadoQuiz  = document.getElementById("resultado-quiz");

btnVisual.addEventListener("click", function() {
  
  resultadoQuiz.innerHTML = `
    <strong>🎨 Você tem perfil Front-End!</strong><br>
    Você curte criar interfaces, trabalhar com cores, layouts e a experiência do usuário.
    Tecnologias pra você: HTML, CSS, React, Vue.
  `;
  resultadoQuiz.style.backgroundColor = "#e8f4fd";
  resultadoQuiz.style.padding          = "12px";
  resultadoQuiz.style.borderRadius     = "8px";
  resultadoQuiz.style.marginTop        = "10px";
});

btnLogica.addEventListener("click", function() {
  
  resultadoQuiz.innerHTML = `
    <strong>⚙️ Você tem perfil Back-End!</strong><br>
    Você curte resolver problemas complexos, trabalhar com dados e fazer a mágica acontecer nos bastidores.
    Tecnologias pra você: Node.js, Python, bancos de dados.
  `;
  resultadoQuiz.style.backgroundColor = "#e8f8f0";
  resultadoQuiz.style.padding          = "12px";
  resultadoQuiz.style.borderRadius     = "8px";
  resultadoQuiz.style.marginTop        = "10px";
});


let pontosFront  = 0;
let pontosBack   = 0;

btnVisual.addEventListener("click", function() {
  pontosFront++;
  exibirPerfil();
});

btnLogica.addEventListener("click", function() {
  pontosBack++;
  exibirPerfil();
});

function exibirPerfil() {
  if (pontosFront > pontosBack) {
    resultadoQuiz.textContent = "🎨 Perfil Front-End!";
  } else if (pontosBack > pontosFront) {
    resultadoQuiz.textContent = "⚙️ Perfil Back-End!";
  } else {
    resultadoQuiz.textContent = "🔄 Perfil Full Stack — você é dos dois!";
  }
}  