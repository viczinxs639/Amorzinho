const texto = `E eu desistiria da eternidade para te tocar
Porque eu sei que de alguma forma você me sente
Você é o mais próximo que estarei do paraíso
E eu não quero ir para casa agora
Não quero deixar você ir embora agora

E eu te sinto mesmo quando estou sozinho
E eu sei que você está comigo no escuro
E eu não posso suportar perder você agora
Porque eu sei que eu nunca vou te encontrar de novo

E eu não posso esperar para estar com você
Porque você é a razão pela qual eu respiro
Eu não posso esperar para estar com você
Porque eu te amo mais do que palavras podem dizer`;

const lyricsDiv = document.getElementById('lyrics');
let i = 0;

function typeWriter() {
  if (i < texto.length) {
    lyricsDiv.textContent += texto.charAt(i);
    i++;
    setTimeout(typeWriter, 60);
  }
}
typeWriter();

// Criar muitos corações no fundo
function createHeartBg() {
  const heart = document.createElement('div');
  heart.className = 'heart-bg';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (5 + Math.random() * 5) + 's';
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 15000);
}
// Mais corações (intervalo menor)
setInterval(createHeartBg, 200);
