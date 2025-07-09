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

// Mostrar "eu te amo" no clique
document.body.addEventListener("click", (e) => {
  const coracao = document.createElement("div");
  coracao.className = "coraçao";
  coracao.style.left = e.clientX + "px";
  coracao.style.top = e.clientY + "px";
  coracao.textContent = "eu te amo 💖";
  document.body.appendChild(coracao);
  setTimeout(() => coracao.remove(), 1000);
});

// Mostrar coraçãozão após 4 segundos segurando
let pressTimer;
document.body.addEventListener("mousedown", () => {
  pressTimer = setTimeout(() => {
    const coracaozao = document.getElementById("coraçaozão");
    coracaozao.style.display = "block";
    setTimeout(() => {
      coracaozao.style.display = "none";
    }, 3000);
  }, 4000);
});

document.body.addEventListener("mouseup", () => {
  clearTimeout(pressTimer);
});
