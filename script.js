// Mensagens "eu te amo" caindo
function criarMensagem() {
  const msg = document.createElement("div");
  msg.className = "mensagem";
  msg.textContent = "eu te amo 💖";
  msg.style.left = Math.random() * window.innerWidth + "px";
  msg.style.setProperty('--hue', Math.floor(Math.random() * 360));
  document.body.appendChild(msg);
  setTimeout(() => msg.remove(), 5000);
}
setInterval(criarMensagem, 500);

// Corações ao clicar
document.body.addEventListener("click", (e) => {
  const coraçao = document.createElement("div");
  coraçao.className = "coraçao";
  coraçao.style.left = e.clientX + "px";
  coraçao.style.top = e.clientY + "px";
  coraçao.textContent = "❤️";
  document.body.appendChild(coraçao);
  setTimeout(() => coraçao.remove(), 1000);
});
