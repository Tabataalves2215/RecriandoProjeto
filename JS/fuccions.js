var engine = {

"cores": ['green', 'pink', 'blue', 'black', 'white', 'yellow', 'navy-blue', 'gray', 'gold', 'beige', 'red', 'orange', 'brown', 'silver', 'purple', 'red', 'violet'],
 
"hexadecimais": {

    'gree': '#008000',
    'pink': '#ffc0cb',
    'blue': '#0000ff',
    'black': '#000000',
    'white': '#ffffff',
    'yellow': '#ffff00',
    'navy-blue':'#000080',
    'gray': '#808080',
    'gold': '#ffd700',
    'beige': '#f5f5dc',
    'red': '#ff0000',
    'orange': '#ffa500',
    'brown': '#654321',
    'silver': '#c0c0c0',
    'purple': '#800080',
    'violet': '#ee82ee'

},

"moedas":0

}

const audioMoeda = new Audio ('AUDIO/moeda.mp3');
const audioErrou = new Audio ('AUDIO/errou.mp3');

function sortearcor(){
var indexCorSorteada = Math.floor (Math.random() *engine.cores.length);

var legendaCorDaCaixa = document.getElementById('cor-na-caixa');
var nomeCorSorteada =  engine.cores[indexCorSorteada];


legendaCorDaCaixa.innerText = nomeCorSorteada.toUpperCase();

return engine.hexadecimais[nomeCorSorteada];


}


function aplicarCorNaCaixa(nomeDacor){
var caixaDasCores = document.getElementById('cor-atual');

caixaDasCores.style.backgroundColor = 'nomeDaCor';
caixaDasCores.style.backgroundImage = "url('/IMG/caixa-fechada.png')";
caixaDasCores.style.backgroundSize = "100%";

}

function atualizaPontuacao(valor){
    var prontuacao = document.getElementById('pontuacao-atual');

    engine.moedas += 1;

    if(valor <0){
    audioErrou.play();
    }
    
    else{
        audioMoeda.play();


   }
    
    

    prontuacao.innerText = engine.moedas;
}

aplicarCorNaCaixa(sortearcor)

if(window.SpeechRecognition || window.webkitSpeechRecongnition){
var speechAPI = window.SpeechRecognition || window.webkitSpeechRecongnition;
var gravador = new speechAPI();


gravador.continuos = false;
gravador.lang = "en-US";

gravador.onstart = function(){
btnGravador.innerText = "Estou Ouvindo";
btnGravador.style.backgroundColor = "white";
btnGravador.style.color = "black";

}

gravador.onend = function(){
    btnGravador.innerText = "Responder";
    btnGravador.style.backgroundColor = "transparent";
    btnGravador.style.color = "white";
     
}

gravador.onresult = function(event){
    console.log(event);
   transcricaoAudio = event.result[0][0].transcript.toUpperCase()
   respontaCorreta = document.getElementById('cor-na-caixa').innerText.toUpperCase();

   if(transcricaoAudio=== respontaCorreta){
       atualizaPontuacao(1);
   }else{
       atualizaPontuacao(-1);
   }
   aplicarCorNaCaixa(sortearcor);
}



}else{
alert('não tem suporte');
}

btnGravador.addEventListener()


