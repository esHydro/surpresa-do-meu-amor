/* ==========================================================
   UMA NOITE PARA LUA
   SCRIPT.JS
   PARTE 1
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    iniciarLoading();

    iniciarMusica();

    configurarEnvelope();

    configurarConstelacao();

    configurarPedido();

});

/* ==========================================================
   LOADING
========================================================== */

function iniciarLoading(){

    const loading = document.getElementById("loading-screen");

    if(!loading) return;

    setTimeout(()=>{

        loading.style.opacity="0";

        loading.style.transition="1s";

        setTimeout(()=>{

            loading.style.display="none";

        },1000);

    },4000);

}



/* ==========================================================
   MÚSICA
========================================================== */

function iniciarMusica(){

    const musica = document.getElementById("backgroundMusic");
    const startButton = document.getElementById("startButton");

    if(!musica || !startButton) return;

    musica.volume = 0.35;

    startButton.addEventListener("click", () => {

        musica.play().catch(err => console.error(err));

    }, { once: true });

}

/* ==========================================================
   ENVELOPE
========================================================== */

function configurarEnvelope(){

    const envelope=document.querySelector(".envelope");

    if(!envelope) return;

    envelope.addEventListener("click",()=>{

        envelope.classList.add("open");

    });

}

/* ==========================================================
   CONSTELAÇÃO
========================================================== */

function configurarConstelacao(){

    const estrelas = document.querySelectorAll(".star");
    const mensagem = document.getElementById("starMessage");

    if(!estrelas.length || !mensagem) return;

    estrelas.forEach((estrela)=>{

        estrela.addEventListener("click",()=>{

            mensagem.style.opacity = "0";

            setTimeout(()=>{

                mensagem.textContent = estrela.dataset.text;
                mensagem.style.opacity = "1";

            },200);

        });

    });

}

/* ==========================================================
   PEDIDO
========================================================== */

function configurarPedido(){

    const sim = document.getElementById("yesButton");
    const nao = document.getElementById("noButton");
    const telaFinal = document.getElementById("yesScreen");
    const musica = document.getElementById("backgroundMusic");

    if(sim){

        sim.addEventListener("click",()=>{

            if(musica){

                musica.volume = .15;

                setTimeout(()=>{

                    musica.volume = .35;

                },2000);

            }

            telaFinal.classList.add("active");

            criarCoracoes();

        });

    }

    if(nao){

        nao.addEventListener("mouseenter",moverBotao);

        nao.addEventListener("touchstart",(e)=>{

            e.preventDefault();

            moverBotao();

        });

    }

}

/* ==========================================================
   BOTÃO "NÃO" FOGE
========================================================== */

function moverBotao(){

    const botao = document.getElementById("noButton");

    const largura = window.innerWidth - 220;
    const altura = window.innerHeight - 120;

    const x = Math.random() * largura;
    const y = Math.random() * altura;

    botao.style.position = "fixed";
    botao.style.left = x + "px";
    botao.style.top = y + "px";
    botao.style.zIndex = "9999";

}

/* ==========================================================
   CHUVA DE CORAÇÕES
========================================================== */

function criarCoracoes(){

    for(let i=0;i<60;i++){

        setTimeout(()=>{

            const coracao = document.createElement("div");

            coracao.innerHTML = "❤️";

            coracao.style.position = "fixed";
            coracao.style.left = Math.random()*100+"vw";
            coracao.style.top = "-40px";
            coracao.style.fontSize = (18+Math.random()*30)+"px";
            coracao.style.pointerEvents = "none";
            coracao.style.zIndex = "99999";
            coracao.style.transition = "all 5s linear";

            document.body.appendChild(coracao);

            setTimeout(()=>{

                coracao.style.top = "110vh";
                coracao.style.transform =
                    "rotate("+(Math.random()*360)+"deg)";

                coracao.style.opacity = "0";

            },30);

            setTimeout(()=>{

                coracao.remove();

            },5000);

        },i*120);

    }

}

/* ==========================================================
   REVELAÇÃO DAS SEÇÕES
========================================================== */

function revelarSecoes(){

    const elementos = document.querySelectorAll(".section");

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach((entry)=>{

            if(entry.isIntersecting){

                entry.target.style.opacity="1";
                entry.target.style.transform="translateY(0)";

            }

        });

    },{

        threshold:.15

    });

    elementos.forEach((el)=>{

        el.style.opacity="0";
        el.style.transform="translateY(80px)";
        el.style.transition="1s";

        observer.observe(el);

    });

}

/* ==========================================================
   ESTRELAS CADENTES
========================================================== */

function iniciarEstrelasCadentes(){

    setInterval(()=>{

        const estrela=document.createElement("div");

        estrela.style.position="fixed";
        estrela.style.left=Math.random()*window.innerWidth+"px";
        estrela.style.top="-100px";
        estrela.style.width="3px";
        estrela.style.height="3px";
        estrela.style.borderRadius="50%";
        estrela.style.background="white";
        estrela.style.boxShadow="0 0 15px white";
        estrela.style.pointerEvents="none";
        estrela.style.zIndex="2";

        document.body.appendChild(estrela);

        estrela.animate([

            {
                transform:"translate(0,0)",
                opacity:1
            },

            {
                transform:"translate(-500px,700px)",
                opacity:0
            }

        ],{

            duration:1800,
            easing:"ease-out"

        });

        setTimeout(()=>{

            estrela.remove();

        },1800);

    },5000);

}

/* ==========================================================
   PARTÍCULAS
========================================================== */

function iniciarParticulas(){

    setInterval(()=>{

        const p=document.createElement("div");

        p.style.position="fixed";
        p.style.left=Math.random()*100+"vw";
        p.style.bottom="-20px";
        p.style.width="5px";
        p.style.height="5px";
        p.style.borderRadius="50%";
        p.style.background="rgba(255,255,255,.5)";
        p.style.pointerEvents="none";
        p.style.zIndex="1";

        document.body.appendChild(p);

        p.animate([

            {
                transform:"translateY(0)",
                opacity:0
            },

            {
                opacity:1
            },

            {
                transform:"translateY(-120vh)",
                opacity:0
            }

        ],{

            duration:12000

        });

        setTimeout(()=>{

            p.remove();

        },12000);

    },450);

}

/* ==========================================================
   INICIALIZAÇÃO FINAL
========================================================== */

iniciarMusica();

configurarEnvelope();

configurarConstelacao();

configurarPedido();

revelarSecoes();

iniciarEstrelasCadentes();

iniciarParticulas();


const startButton = document.getElementById("startButton");
const musica = document.getElementById("backgroundMusic");
const envelope = document.getElementById("letter");

if (startButton) {

startButton.addEventListener("click", () => {

    // Inicia a música
    musica.play().catch(err => console.error(err));

    // Desabilita o botão para evitar vários cliques
    startButton.disabled = true;

    // Efeito de desaparecimento
    startButton.style.transition = "all .8s ease";
    startButton.style.opacity = "0";
    startButton.style.transform = "scale(.9)";

    // Mensagem de início da jornada
    const mensagem = document.createElement("p");

    mensagem.innerHTML = "✨ Nossa história está prestes a começar... ✨";
    mensagem.style.marginTop = "25px";
    mensagem.style.fontSize = "1.2rem";
    mensagem.style.color = "#ffd8ec";
    mensagem.style.opacity = "0";
    mensagem.style.transition = "opacity 1.2s ease";

    startButton.parentNode.appendChild(mensagem);

    setTimeout(() => {

        mensagem.style.opacity = "1";

    }, 300);

}, { once: true });

}