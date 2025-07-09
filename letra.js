const letra = [
  { tempo: 2, texto: "E eu desistiria da eternidade para te tocar" },
  { tempo: 8, texto: "Porque eu sei que de alguma forma você me sente" },
  { tempo: 14, texto: "Você é o mais próximo que estarei do paraíso" },
  { tempo: 20, texto: "E eu não quero ir para casa agora" },
  { tempo: 27, texto: "E tudo que posso sentir é este momento" },
  { tempo: 33, texto: "E tudo que posso respirar é a sua vida" },
  { tempo: 39, texto: "E cedo ou tarde isso acabará" },
  { tempo: 45, texto: "Eu só não quero sentir sua falta esta noite" },
  { tempo: 52, texto: "E eu não quero que o mundo me veja" },
  { tempo: 58, texto: "Porque eu não acho que eles entenderiam" },
  { tempo: 64, texto: "Quando tudo é feito para ser quebrado" },
  { tempo: 70, texto: "Eu só quero que você saiba quem sou" },
  { tempo: 78, texto: "E você não pode lutar contra as lágrimas que não virão" },
  { tempo: 84, texto: "Ou o momento de verdade em suas mentiras" },
  { tempo: 90, texto: "Quando tudo se parece como nos filmes" },
  { tempo: 96, texto: "É, você sangra apenas para saber que está vivo" },
  { tempo: 102, texto: "E eu não quero que o mundo me veja" },
  { tempo: 108, texto: "Porque eu não acho que eles entenderiam" },
  { tempo: 114, texto: "Quando tudo é feito para ser quebrado" },
  { tempo: 120, texto: "Eu só quero que você saiba quem sou" },
  { tempo: 126, texto: "Eu só quero que você saiba quem sou" },
  { tempo: 132, texto: "Eu só quero que você saiba quem sou" },
];

const letraDiv = document.getElementById("letra");
const audio = document.getElementById("audio");
const fim = document.getElementById("fim");

let atual = 0;
let escrevendo = false;

function escreverTexto(texto, i = 0) {
  escrevendo = true;
  if (i < texto.length) {
    letraDiv.innerHTML += texto[i];
    setTimeout(() => escreverTexto(texto, i + 1), 40); // Velocidade de digitação
  } else {
    letraDiv.innerHTML += "\n";
    escrevendo = false;
  }
}

function mostrarLetra() {
  const tempo = Math.floor(audio.currentTime);
  if (atual < letra.length && tempo >= letra[atual].tempo && !escrevendo) {
    escreverTexto(letra[atual].texto);
    atual++;
  }

  if (atual === letra.length && !escrevendo) {
    fim.style.display = "block";
  }

  requestAnimationFrame(mostrarLetra);
}

audio.addEventListener("play", () => {
  mostrarLetra();
});
