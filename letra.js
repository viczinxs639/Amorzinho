
const letra = [
  { tempo: 1, texto: "And I'd give up forever to touch you" },
  { tempo: 5, texto: "Cause I know that you feel me somehow" },
  { tempo: 10, texto: "You're the closest to heaven that I'll ever be" },
  { tempo: 16, texto: "And I don't wanna go home right now" },
  { tempo: 22, texto: "And all I can taste is this moment" },
  { tempo: 28, texto: "And all I can breathe is your life" }
];
const divLetra = document.getElementById("letra");
const audio = document.getElementById("audio");
const final = document.getElementById("fim");

let i = 0;
function mostrarLetra() {
  const tempoAtual = Math.floor(audio.currentTime);
  if (i < letra.length && tempoAtual >= letra[i].tempo) {
    divLetra.innerHTML += `<p>${letra[i].texto}</p>`;
    i++;
  }
  if (i === letra.length) {
    final.style.display = "block";
  }
  requestAnimationFrame(mostrarLetra);
}
audio.addEventListener("play", () => {
  mostrarLetra();
});
