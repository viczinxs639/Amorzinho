function mostrarMensagem() {
  alert("Julia, você é muito especial pra mim! 💖 Nunca se esqueça disso.");
}

// Criar corações animados no fundo
setInterval(() => {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (2 + Math.random() * 3) + "s";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}, 300);
