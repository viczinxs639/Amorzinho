function mostrarMensagem() {
  alert("Julia, você é muito especial pra mim! 💖 Nunca se esqueça disso.");
}

// Efeito digitando
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

// Corações animados
document.body.addEventListener("click", function (e) {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = e.clientX + "px";
  heart.style.top = e.clientY + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 2000);
});

// Estrelas animadas no fundo
const canvas = document.getElementById('estrelas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let estrelas = [];
for (let i = 0; i < 100; i++) {
  estrelas.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.5,
    alpha: Math.random()
  });
}

function desenharEstrelas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'white';
  estrelas.forEach(estrela => {
    ctx.globalAlpha = estrela.alpha;
    ctx.beginPath();
    ctx.arc(estrela.x, estrela.y, estrela.radius, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.globalAlpha = 1;
  requestAnimationFrame(desenharEstrelas);
}
desenharEstrelas();
