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
let minhaBio = "Procuro um rumo nesse grande vale da estranheza" + 
        " Tenho um thor";
let anoFormatura = 2026;
let mesFormatura = 12; 
let diaFormatura = 31; 
let anoIngresso = 2025;
let mesIngresso = 1;
let diaIngresso = 1;

let hoje = new Date();
let mesAtual = hoje.getMonth() +1;// começa no mês 0
let anoAual = hoje.getFullYear(); // ano atual 
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
document.getElementById("curso").innerText = curso;
document.getElementById("tempoRestante").innerText = `Tempo restante para formatura: ${anoFormatura - anoIngresso}`