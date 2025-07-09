function mostrarMensagem() {
  alert("Julia, você é muito especial pra mim! 💖 Nunca se esqueça disso.");
}

// Texto digitando
const texto = "E cada batida do meu coração... é um 'eu te amo' só pra você 💖";
const h1 = document.querySelector(".digitando");
let i = 0;
function digitar() {
  if (i < texto.length) {
    h1.textContent += texto.charAt(i);
    i++;
    setTimeout(digitar, 50);
  }
}
digitar();

// Criar corações ao clicar
document.body.addEventListener("click", function (e) {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = e.clientX + "px";
  heart.style.top = e.clientY + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 3000);
});

// Mensagens "eu te amo" coloridas descendo
const mensagensFundo = document.querySelector(".background-mensagens");
const cores = ["#ff0000", "#ff69b4", "#ff6f91", "#ff1493", "#e75480"];

setInterval(() => {
  const msg = document.createElement("div");
  msg.className = "mensagem-fundo";
  msg.innerText = "Eu te amo";
  msg.style.left = Math.random() * 100 + "vw";
  msg.style.color = cores[Math.floor(Math.random() * cores.length)];
  msg.style.fontSize = (Math.random() * 1 + 1) + "rem";
  mensagensFundo.appendChild(msg);
  setTimeout(() => msg.remove(), 10000);
}, 400);
