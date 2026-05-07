// Modo claro/escuro
const botao = document.getElementById("modoClaroEscuro");
let escuro = false;
botao.addEventListener("click", () => {
  escuro = !escuro;
  document.body.classList.toggle("dark", escuro);
  botao.textContent = escuro ? "Modo claro" : "Modo escuro";
});

// Calcular tempo de curso
function calcular() {
  const inicio = new Date(document.getElementById("dataInicio").value);
  const fim    = new Date(document.getElementById("dataFim").value);
  const el     = document.getElementById("tempoRestante");

  if (isNaN(inicio) || isNaN(fim)) {
    el.classList.add("visivel");
    el.textContent = "Preencha as duas datas.";
    return;
  }
  if (fim <= inicio) {
    el.classList.add("visivel");
    el.textContent = "Parabéns, você formou!";
    return;
  }

  let anos  = fim.getFullYear() - inicio.getFullYear();
  let meses = fim.getMonth()    - inicio.getMonth();
  let dias  = fim.getDate()     - inicio.getDate();

  if (dias < 0) { meses--; dias += new Date(fim.getFullYear(), fim.getMonth(), 0).getDate(); }
  if (meses < 0) { anos--; meses += 12; }

  let partes = [];
  if (anos  > 0) partes.push(`${anos} ano${anos  > 1 ? "s" : ""}`);
  if (meses > 0) partes.push(`${meses} mês${meses > 1 ? "es" : ""}`);
  if (dias  > 0) partes.push(`${dias} dia${dias  > 1 ? "s" : ""}`);

  const suffix = anos <= 0 ? " — você está na reta final!" : "";
  el.classList.add("visivel");
  el.textContent = `Tempo restante: ${partes.join(" | ") || "Menos de um dia!"}${suffix}`;
}

// Quiz de perfil
let pontosFront = 0, pontosBack = 0;

function votar(tipo) {
  if (tipo === "visual") pontosFront++;
  else pontosBack++;

  document.getElementById("btn-visual").classList.toggle("ativo", tipo === "visual");
  document.getElementById("btn-logica").classList.toggle("ativo", tipo === "logica");

  const el = document.getElementById("resultado-quiz");
  el.classList.add("visivel");

  if (pontosFront > pontosBack)      el.textContent = "Você tem perfil Front-End!";
  else if (pontosBack > pontosFront) el.textContent = "Você tem perfil Back-End!";
  else                               el.textContent = "Você tem perfil Full Stack!";
}