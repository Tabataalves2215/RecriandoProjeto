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

function sortearcor(){
var indexCorSorteada = Math.floor (Math.random() *engine.cores.length);

var legendaCorDaCaixa = document.getElementById('cor-na-caixa');

var nomeCorSorteada = legendaCorDaCaixa.innerText = engine.cores[indexCorSorteada]. engine.cores[indexCorSorteada];
legendaCorDaCaixa.innerText = nomeDacor. toUppercase;

return engine.hexadecimais[nomeCorSorteada];
}

function aplicarCorNaCaixa(nomeDacor){
var caixaDasCores = document.getElementById('cor-atual');
caixaDasCores.style.backgroundColor = nomeDacor;

}

